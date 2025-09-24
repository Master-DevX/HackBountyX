import './square.css'
import medal from '../../assets/medal.png'
import aloqa from '../../assets/aloqa.png'
import chaqmoq from '../../assets/chaqmoq.png'
import crown from '../../assets/crown.png'

function Square(){
        return(
            <div className='square'>
                <div className="top_container">
                    <div className="top_img_containers">
                        <h1 className="top_titles">Why Choose SquareUp?</h1>
                        <p className="top_text">Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
                    </div>
                </div>
                <div className="bottom_containers">
                    <div className="s_cards">
                        <div className="title_wrap">
                        <div className="card_img_div"><img src={medal} alt="(x_x)" /></div>
                        <h1 className="s_card_titles">Expertise</h1>
                        </div>
                        <p className="s_card_text">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
                    </div>
                    <div className="s_cards">
                        <div className="title_wrap">
                        <div className="card_img_div"><img src={aloqa} alt="(x_x)" /></div>
                        <h1 className="s_card_titles">Client-Centric Approach</h1>
                        </div>
                        <p className="s_card_text">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
                    </div>
                    <div className="s_cards">
                        <div className="title_wrap">
                        <div className="card_img_div"><img src={chaqmoq} alt="(x_x)" /></div>
                        <h1 className="s_card_titles">Results-Driven Solutions</h1>
                        </div>
                        <p className="s_card_text">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
                    </div>
                    <div className="s_cards">
                        <div className="title_wrap">
                        <div className="card_img_div"><img src={crown} alt="(x_x)" /></div>
                        <h1 className="s_card_titles">Collaborative Partnership</h1>
                        </div>
                        <p className="s_card_text">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
                    </div>
                </div>
            </div>
        )
}

export default Square