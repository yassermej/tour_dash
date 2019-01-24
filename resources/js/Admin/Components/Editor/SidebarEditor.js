import React, { Fragment } from "react";
import _isEmpty from "lodash/isEmpty";
import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";
import AddContentBlock from "./AddContentBlock";
import SidebarEditorTypography from "./SidebarEditorTypography";
import SidebarEditorColumns from "./SidebarEditorColumns";
import SidebarEditorButton from "./SidebarEditorButton";
import SidebarEditorSpacer from "./SidebarEditorSpacer";
import SidebarEditorGoogleMaps from "./SidebarEditorGoogleMaps";
import SidebarEditorImage from "./SidebarEditorImage";
import blockTypeMap from "./blockTypeMap";
import { Spacer } from "../Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarEditorLatestPosts from "./SidebarEditorLatestPosts";
import SidebarEditorAccommodations from "./SidebarEditorAccommodations";
import SidebarEditorReviews from "./SidebarEditorReviews";
import SidebarEditorCard from "./SidebarEditorCard";
import SidebarEditorContactForm from "./SidebarEditorContactForm";

const SidebarEditor = ({
	editingBlock,
	pageUpdated,
	savingPage,
	onSavePage,
	clearEditingBlock,
	ctaText
}) => {
	return (
		<SiderbarPlaceholder>
			<SidebarEditorContainer>
				{!_isEmpty(editingBlock) ? (
					<Fragment>
						<BackToAllElements onClick={() => clearEditingBlock()}>
							<FontAwesomeIcon icon="chevron-left" />
							<span>Vsi elementi</span>
						</BackToAllElements>
						<Group>
							<h3>Tip bloka</h3>
							<p>{blockTypeMap[editingBlock.type]}</p>
						</Group>
						{(() => {
							switch (editingBlock.type) {
								case "typography": {
									return <SidebarEditorTypography />;
								}
								case "columns": {
									return <SidebarEditorColumns />;
								}
								case "button": {
									return <SidebarEditorButton />;
								}
								case "spacer": {
									return <SidebarEditorSpacer />;
								}
								case "googleMaps": {
									return <SidebarEditorGoogleMaps />;
								}
								case "image": {
									return <SidebarEditorImage />;
								}
								case "latestPosts": {
									return <SidebarEditorLatestPosts />;
								}
								case "accommodations": {
									return <SidebarEditorAccommodations />;
								}
								case "reviews": {
									return <SidebarEditorReviews />;
								}
								case "card": {
									return <SidebarEditorCard />;
								}
								case "contactForm": {
									return <SidebarEditorContactForm />;
								}
								default: {
									return null;
								}
							}
						})()}
					</Fragment>
				) : (
					<Fragment>
						<Group>
							<h3>Dodaj nov element</h3>
							<AddContentBlock />
						</Group>
					</Fragment>
				)}
			</SidebarEditorContainer>
			<Spacer />
			<SavePage
				onClick={pageUpdated ? onSavePage : null}
				className={classNames({
					disabled: !pageUpdated
				})}
			>
				{savingPage ? (
					<FontAwesomeIcon icon="circle-notch" spin size="1x" />
				) : (
					ctaText
				)}
			</SavePage>
		</SiderbarPlaceholder>
	);
};

SidebarEditor.propTypes = {
	editingBlock: PropTypes.object
};

const SiderbarPlaceholder = styled.div`
	position: relative;
`;

const SidebarEditorContainer = styled.div`
	padding: 10px 15px;
`;

const BackToAllElements = styled.div`
	margin: 0.5em 0 1em;
	color: ${props => props.theme.heavyGray};
	transition: ${props => props.theme.easeTransition};
	span {
		margin-left: 1em;
	}
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.mainColor};
	}
`;

export const Group = styled.div`
	margin: 10px 0;
	&:first-child {
		margin-top: 0;
	}
	&:last-child {
		margin-bottom: 0;
		&::after {
			display: none;
		}
	}
	h3 {
		font-weight: 900;
		font-size: 12px;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
	&::after {
		content: "";
		display: block;
		margin: 15px auto;
		width: 50%;
		height: 1px;
		background: ${props => props.theme.lightGray};
	}
`;

export const GroupItem = styled.div`
	margin: 10px 0;
	h5 {
		font-size: 12px;
		margin-bottom: 3px;
	}
`;

const SavePage = styled.button`
	border: none;
	outline: none;
	position: fixed;
	bottom: 0;
	z-index: 10;
	right: 0;
	width: 300px;
	background-color: ${props => props.theme.mainColor};
	color: ${props => props.theme.white};
	text-transform: uppercase;
	font-weight: 900;
	font-size: 14px;
	padding: 1.5em 1em;
	transition: ${props => props.theme.easeTransition};
	&.disabled {
		background-color: ${props => props.theme.whiteShade3};
		color: ${props => props.theme.darkGray};
		&:hover {
			cursor: not-allowed;
			background-color: ${props => props.theme.whiteShade3};
		}
	}
	&:hover {
		cursor: pointer;
		background-color: ${props => props.theme.mainColorHover};
	}
`;

export default SidebarEditor;
