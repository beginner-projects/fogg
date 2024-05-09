import './index.css'

interface RedProps {
    RedButtonText: string;
}

export default function Red({RedButtonText}: RedProps) {
    return (
        <div>
            <button className="button-3d button-3d_md button-3d_red button-3d_center snipcss-sdtmR" type="button" id="click_btn_signUpAndPlay" data-1="">
                <span className="button-3d__outer" data-1="">
                    <span className="button-3d__inner" data-1="">
                        <span className="button-3d__text" data-1="">
                            {RedButtonText}
                        </span>
                    </span>
                </span>
            </button>
        </div>
    )
}