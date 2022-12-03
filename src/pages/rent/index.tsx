import { Header } from "components/common/Header"
import nft0 from "assets/img/nft0.png"
import { TokenInfo } from "components/common/TokenInfo"
import { BuyButton } from "components/common/BuyButton"
import { Link, useNavigate } from "react-router-dom"
import CalOut from "assets/img/cal-out.svg"
import User from "assets/img/user.svg"

export const Rent = () => {

  const navigate = useNavigate()

  return <div className="app main">
    <Header title={"Rental Item"} hasBack />
    <div className="content no-bottom">

      <div className="purchase-info mb20">
        <div className="purchase-img">
          <img src={nft0} alt="PurchaseImg" />
        </div>
        <div>
          <p className="title">
          Pick AXE
          </p>

          <div>
            <p className="author dot-icon">
            7:3 Revenue Share
            </p>
            <p className="date date-icon">12 days</p>
          </div>
        </div>
      </div>

      <div className="line" />

      <div className="mb24 mt34">
      <p className="content-title mb12">
        Rental period
      </p>

      <div className="rental-box x-eq mb12">
        <div className="d-flex y-center">
          <div className="mr10">
            <img src={CalOut} alt="" />
          </div>
          <div>
            <p className="content-title">
              Until 2022. 12. 17
            </p>
          </div>
        </div>
        <p>
          AM 12:00 (UTC+5:30)
        </p>

      </div>
    </div>

      <div className="line"></div>



      <div className="purchase-detail">
        <h3 className="title">
          Rental Detail
        </h3>
        <h4 className="desc mb12">
          <p className="bold">Rental From</p>
        </h4>

        <div className="card-info mt20">
            <div className="profile-container mr23">
              <div className="user-profile">
                <img src={User} alt="user-icon" />
              </div>

              <div className="user-detail">
                <p className="name">Salvador Dali</p>
                <p className="cnt">23,201 Rent Tickets</p>
              </div>
            </div>
          </div>
        
      </div>

      <div className="bottom-button" onClick={() => navigate("/rentLoading")}>
        <div className="rent-button w-per-100 d-flex x-center">
          <p>
            Confirm!
          </p>
        </div>
      </div>
    </div>
  </div>
}
