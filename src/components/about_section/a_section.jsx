import './a_section.css'
import drawpen from '../../assets/Icon.png'
import puzzle from '../../assets/Icon (1).png'
import portfel from '../../assets/Icon (2).png'
function ASection(){
    return(
        <div className='service'>
            <div className="top_container">
                <div className="top_img_container">
                    <h1 className="top_title">What our Clients say About us</h1>
                    <p className="top_text">At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us</p>
                </div>
            </div>
            <div className="bottom_container">
                <div className="s_card">
                    <h1 className="s_card_title">SquareUp has been Instrumental in Transforming our Online Presence.</h1>
                    <p className="s_card_text">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
                    <div className="client_container">
                        <div className="client_img">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default ASection