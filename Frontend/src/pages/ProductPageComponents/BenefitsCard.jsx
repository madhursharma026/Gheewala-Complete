function BenefitsCard({ title, desription }) {
  return (
    <>
      <div class="mt-3 h-100 rounded p-2">
        <div className="text-center">
          <img
            src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234"
            class="card-img-top w-100"
            alt="#ImgNotFound"
            style={{ maxHeight: "300px", maxWidth: "300px" }}
          />
        </div>
        <div class="card-body px-2">
          <h4 class="mb-3">{title}</h4>
          <p class="">{desription}</p>
        </div>
      </div>
    </>
  );
}

export default BenefitsCard;
