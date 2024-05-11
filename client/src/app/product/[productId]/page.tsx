export default function ProductItem({
	params,
}: {
	params: { productId: string };
}) {
	return (
		<main>
			<div className="content">Product page {params.productId}</div>
			<a href="/">back home</a>
		</main>
	);
}