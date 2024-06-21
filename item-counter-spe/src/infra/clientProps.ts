import { IOdspTokenProvider, OdspClientProps } from "@fluidframework/odsp-client";

// Create the client props for the Fluid client
export const getClientProps = (
	siteUrl: string,
	driveId: string,
	tokenProvider: IOdspTokenProvider,
): OdspClientProps => {
	const connectionConfig = {
		tokenProvider: tokenProvider,
		siteUrl: siteUrl,
		driveId: driveId,
		filePath: "",
	};

	return {
		connection: connectionConfig,
	};
};
