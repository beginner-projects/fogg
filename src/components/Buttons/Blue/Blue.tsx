import './index.css'

interface BlueProps {
    BlueButtonText: string;
}

export default function Blue({BlueButtonText}: BlueProps) {
    return (
        <div className='mr-2'>
            <button className="button-3d button-3d_md button-3d_red button-3d_center snipcss-sdtmR" type="button" id="click_btn_signUpAndPlay" data-2="">
                <span className="button-3d__outer" data-2="">
                    <span className="button-3d__inner" data-2="">
                        <span className="button-3d__text" data-2="">
                            {BlueButtonText}
                        </span>
                    </span>
                </span>
            </button>
        </div>
    )
}