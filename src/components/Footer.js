import { ActionType } from './Icon';
import PropTypes from 'prop-types';
import React from 'react';
import ToolbarAction from './ToolbarAction';
import { css, StyleSheet } from 'aphrodite/no-important';
import defaults from '../theme';
import deepMerge from '../utils/deepMerge';

class Footer extends React.Component {

	constructor (props) {
		super(props);
	}

	handleAction (type) {
		this.props.onAction(type);
	};

	render () {
		const {
			caption,
			countCurrent,
			countSeparator,
			countTotal,
			showCount,
			zoomable,
			rotatable,
			savable,
		} = this.props;

		if (!caption && !showCount) return null;

		const classes = StyleSheet.create(deepMerge(defaultStyles, this.context.theme));

		const imageCount = showCount ? (
			<div className={css(classes.footerCount)}>
				{countCurrent}
				{countSeparator}
				{countTotal}
			</div>)
			: <span />;

		let featureNodeArr = [];

		if (zoomable) {
			featureNodeArr = featureNodeArr.concat([
				<li
					key="zoomIn"
					className={css(classes.footerActionBtn)}>
					<ToolbarAction
						icon="zoomIn"
						onClick={() => { this.handleAction(ActionType.zoomIn); }}
					/>
				</li>,
				<li
					key="zoomOut"
					className={css(classes.footerActionBtn)}>
					<ToolbarAction
						icon="zoomOut"
						onClick={() => { this.handleAction(ActionType.zoomOut); }}
					/>
				</li>,
			]);
		}

		if (rotatable) {
			featureNodeArr = featureNodeArr.concat([
				<li
					key="rotateLeft"
					className={css(classes.footerActionBtn)}>
					<ToolbarAction
						icon="rotateLeft"
						onClick={() => { this.handleAction(ActionType.rotateLeft); }}
					/>
				</li>,
				<li
					key="rotateRight"
					className={css(classes.footerActionBtn)}>
					<ToolbarAction
						icon="rotateRight"
						onClick={() => { this.handleAction(ActionType.rotateRight); }}
					/>
				</li>,
			]);
		}

		if (savable) {
			featureNodeArr = featureNodeArr.concat([
				<li
					key="save"
					className={css(classes.footerActionBtn)}>
					<ToolbarAction
						icon="save"
						onClick={() => { this.handleAction(ActionType.save); }}
					/>
				</li>,
			]);
		}

		return (
			<div className={css(classes.footer)}>
				<div className={css(classes.footerInfos)}>
					{caption ? (
						<figcaption className={css(classes.footerCaption)}>
							{caption}
						</figcaption>
					) : <span className={css(classes.footerCaption)} />}

					<ul className={css(classes.actions)}>
						{featureNodeArr}
					</ul>

					{imageCount}
				</div>

				<div className={css(classes.footerActions)}>

				</div>
			</div>
	);
	}
}

Footer.propTypes = {
	caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	countCurrent: PropTypes.number,
	countSeparator: PropTypes.string,
	countTotal: PropTypes.number,
	onAction: PropTypes.func,
	rotatable: PropTypes.bool,
	showCount: PropTypes.bool,
	zoomable: PropTypes.bool,
};
Footer.contextTypes = {
	theme: PropTypes.object.isRequired,
};

const defaultStyles = {
	footer: {
		position: 'absolute',
		bottom: 35,
		width: '100%',
		height: '60px',
	},
	footerInfos: {
		boxSizing: 'border-box',
		color: defaults.footer.color,
		cursor: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		left: 0,
		lineHeight: 1.3,
		paddingBottom: defaults.footer.gutter.vertical,
		paddingLeft: defaults.footer.gutter.horizontal,
		paddingRight: defaults.footer.gutter.horizontal,
		paddingTop: defaults.footer.gutter.vertical,
		zIndex: 1100,
		alignItems: 'center',
	},
	footerCount: {
		color: defaults.footer.count.color,
		fontSize: defaults.footer.count.fontSize,
		paddingLeft: '1em', // add a small gutter for the caption
		flex: 1,
		textAlign: 'right',
	},
	footerCaption: {
		flex: 1,
	},
	footerActions: {
		position: 'relative',
		flex: 1,
	},
	actions: {
		display: 'flex',
		listStyle: 'none',
		justifyContent: 'center',
		padding: 0,
		margin: 0,
	},
};

export default Footer;
