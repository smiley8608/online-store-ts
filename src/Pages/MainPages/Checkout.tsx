import React, { useState } from "react";
import { useAppState } from "../../Redux/Hook";

const Checkout = () => {
    const user = useAppState((state) => state.user.user);
    // const cart = useAppState((state) => state.user.user?.cart);
    const [formState, setState] = useState<any>();
    return (
        <div className="container wow fadeIn">
            <h2 className="my-5 h2 text-center">Checkout form</h2>

            <div className="row">
                <div className="col-md-8 mb-4">
                    <div className="card">
                        <form className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-2">
                                    <div className="md-form ">
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="form-control"
                                            value={user?.fname}
                                            onChange={(e) =>
                                                setState({ ...formState, fname: e.target.value })
                                            }
                                        />
                                        <label htmlFor="firstName" className="">
                                            First name
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-2">
                                    <div className="md-form">
                                        <input type="text" id="lastName" className="form-control"
                                            value={user?.lname}
                                            onChange={(e) => setState({ ...formState, lname: e.target.value })}
                                        />
                                        <label htmlFor="lastName" className="">
                                            Last name
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="md-form input-group pl-0 mb-5">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                        @
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control py-0"
                                    placeholder="Username"
                                    aria-describedby="basic-addon1"
                                    value={user?.username}
                                    readOnly
                                />
                            </div>

                            <div className="md-form mb-5">
                                <input
                                    type="text"
                                    id="email"
                                    className="form-control"
                                    placeholder="youremail@example.com"
                                    value={user?.email}
                                    required
                                    readOnly
                                />
                                <label htmlFor="email" className="">
                                    Email
                                </label>
                            </div>

                            <div className="md-form mb-5">
                                {/* <input
                                    type="text"
                                    id="address"
                                    className="form-control"
                                    placeholder="1234 Main St"
                                /> */}
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 mb-4">
                                        <label htmlFor="buildno">Building/Door No.</label>
                                        <input
                                            type="text"
                                            id="buildno"
                                            className="form-control"
                                            placeholder=""
                                            value={user && user.address?.length > 0 ? user?.address[0].buildingNo : ""}
                                            onChange={(e) => setState({ ...formState, buildingNo: e.target.value })}
                                        />

                                    </div>
                                    <div className="col-lg-4 col-md-12 mb-4">
                                        <label htmlFor="street">Street/Area</label>
                                        <input
                                            type="text"
                                            id="street"
                                            className="form-control"
                                            placeholder="1234 Main St"
                                            value={user && user.address?.length > 0 ? user?.address[0].street : ""}
                                            onChange={(e) => setState({ ...formState, street: e.target.value })}
                                        />

                                    </div>
                                    <div className="col-lg-4 col-md-12 mb-4">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            className="form-control"
                                            placeholder="1234 Main St"
                                            value={user && user.address?.length > 0 ? user?.address[0].city : ""}
                                            onChange={(e) => setState({ ...formState, city: e.target.value })}
                                        />

                                    </div>
                                </div>
                                <label htmlFor="address" className="">
                                    Address
                                </label>
                            </div>


                            <div className="row">
                                <div className="col-lg-4 col-md-12 mb-4">
                                    <label htmlFor="country">Country</label>
                                    <select
                                        className="custom-select d-block w-100"
                                        id="country"
                                        required
                                        onChange={(e) => setState({ ...formState, country: e.target.value })}
                                        value={user && user.address?.length > 0 ? user?.address[0].country : ""}
                                    >
                                        <option value="">Choose...</option>
                                        <option value={"usa"}>United States</option>
                                        <option value={"india"}>India</option>
                                        <option value={"canada"}>Canada</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <label htmlFor="state">State</label>
                                    <select
                                        className="custom-select d-block w-100"
                                        id="state"
                                        required
                                    >
                                        <option value="">Choose...</option>
                                        <option>CalihtmlFornia</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <label htmlFor="zip">Zip</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="zip"
                                        placeholder=""
                                        required
                                    />
                                    <div className="invalid-feedback">Zip code required.</div>
                                </div>
                            </div>



                            <hr />

                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input
                                        id="credit"
                                        name="paymentMethod"
                                        type="radio"
                                        className="custom-control-input"
                                        defaultChecked
                                        required
                                    />
                                    <label className="custom-control-label" htmlFor="credit">
                                        Credit card
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        id="debit"
                                        name="paymentMethod"
                                        type="radio"
                                        className="custom-control-input"
                                        required
                                    />
                                    <label className="custom-control-label" htmlFor="debit">
                                        Debit card
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        id="paypal"
                                        name="paymentMethod"
                                        type="radio"
                                        className="custom-control-input"
                                        required
                                    />
                                    <label className="custom-control-label" htmlFor="paypal">
                                        Paypal
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name">Name on card</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-name"
                                        placeholder=""
                                        required
                                    />
                                    <small className="text-muted">
                                        Full name as displayed on card
                                    </small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-number">Credit card number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-number"
                                        placeholder=""
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration">Expiration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-expiration"
                                        placeholder=""
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration">CVV</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-cvv"
                                        placeholder=""
                                        required
                                    />
                                    <div className="invalid-feedback">Security code required</div>
                                </div>
                            </div>
                            <hr className="mb-4" />
                            <button
                                className="btn btn-primary btn-lg btn-block"
                                type="submit"
                            >
                                Continue to checkout
                            </button>
                        </form>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>

                    <ul className="list-group mb-3 z-depth-1">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Product name</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$12</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Second product</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Third item</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">-$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Promo code"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-secondary btn-md waves-effect m-0"
                                    type="button"
                                >
                                    Redeem
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
