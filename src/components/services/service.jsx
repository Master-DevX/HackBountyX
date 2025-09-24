import './service.css'
import drawpen from '../../assets/Icon.png'
import puzzle from '../../assets/Icon (1).png'
import portfel from '../../assets/Icon (2).png'
function Service(){
    return(
        <div className='service'>
            <div className="top_container">
                <div className="top_img_container">
                    <h1 className="top_title">Our Services</h1>
                    <p className="top_text">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
                </div>
            </div>
            <div className="bottom_container">
                <div className="s_card">
                    <div className="card_img_div"><img src={drawpen} alt="(x_x)" /></div>
                    <h1 className="s_card_title">Design</h1>
                    <p className="s_card_text">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
                    <button className="s_card_btn">Learn More</button>
                </div>
                <div className="s_card">
                    <div className="card_img_div"><img src={puzzle} alt="(x_x)" /></div>
                    <h1 className="s_card_title">Design</h1>
                    <p className="s_card_text">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
                    <button className="s_card_btn">Learn More</button>
                </div>
                <div className="s_card">
                    <div className="card_img_div"><img src={portfel} alt="(x_x)" /></div>
                    <h1 className="s_card_title">Design</h1>
                    <p className="s_card_text">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
                    <button className="s_card_btn">Learn More</button>
                </div>
            </div>
        </div>
    )
}
export default Service