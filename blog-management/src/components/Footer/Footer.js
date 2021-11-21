import React from "react";
import {
	Box,
	Container,
	Row,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<Container>
				<Row>
					<Heading >Contact Us:</Heading>
					<FooterLink href="https://www.facebook.com/">
						<i className="fab fa-facebook-f">
							<span style={{ marginLeft: "10px" }}>
								Facebook
							</span>
						</i>
					</FooterLink>
					<FooterLink href="https://www.instagram.com/">
						<i className="fab fa-instagram">
							<span style={{ marginLeft: "10px" }}>
								Instagram
							</span>
						</i>
					</FooterLink>
					<FooterLink href="https://twitter.com/login">
						<i className="fab fa-twitter">
							<span style={{ marginLeft: "10px" }}>
								Twitter
							</span>
						</i>
					</FooterLink>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
