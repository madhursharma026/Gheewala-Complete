function ReviewAndRating() {
  return (
    <>
      <div class="card mt-3 p-3">
        <div class="card-body px-2">
          <div class="card-title">
            <div className="row">
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-2 col-lg-4 col-xl-3">
                    <span
                      className="username px-1"
                      style={{
                        borderRadius: "100%",
                        background: "#28341E ",
                        color: "white",
                        fontSize: "24px",
                      }}
                    >
                      <b>JS</b>
                    </span>
                  </div>
                  <div
                    className="col-10 col-lg-8 col-xl-9"
                    style={{ marginTop: "-10px" }}
                  >
                    <b style={{ fontSize: "12px" }}>Jeffrey S</b>
                    <br />
                    <b style={{ fontSize: "12px" }}>Bunnle and relaxing</b>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 text-center">
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <hr className="mt-3" />
          </div>
          <p className="text-lg md:text-xl font-semibold">
            Very nice tea. We are enjoying.
          </p>
          <h5 className="sub_para">
            <i class="fa fa-check text-[#28341E] "></i> I recommend this product
          </h5>
          <div className="sub_para">
            Review left on: Darjeeling Castleton Spring Chinary Black - Loose
            leaf / 1kg | 500 cup
          </div>
          {/* <p class="card-text">Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description</p> */}
        </div>
      </div>
    </>
  );
}

export default ReviewAndRating;
