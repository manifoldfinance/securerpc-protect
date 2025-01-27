declare module "*.mdx" {
	import type { ReactElement } from "react";
	const MDXComponent: (props: any) => ReactElement;
	export default MDXComponent;
}
