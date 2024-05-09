import Blue from '@/components/Buttons/Blue/Blue'
import Red from '@/components/Buttons/Red/Red'
import './index.css'

export default function Home() {
    return (
        <>
            <div className='mainWrapper'>
                <div className='stakeStatWrapper'>
                    <h3 className='text-gray-400'>Staked (SPD):</h3>
                    <h1 className='text-white text-4xl'>00</h1>
                </div>
                <div className='stakeButtonWrapper'>
                    <Blue BlueButtonText="Stake" />
                    <Red RedButtonText="Unstake" />
                </div>
            </div>
            <div className='mainWrapper'>
                <div className='stakeStatWrapper'>
                    <h3 className='text-gray-400'>Claim (BTC):</h3>
                    <h1 className='text-white text-4xl'>00</h1>
                </div>
                <div className='stakeButtonWrapper'>
                    <Blue BlueButtonText="Claim" />
                </div>
            </div>
        </>
    )
}