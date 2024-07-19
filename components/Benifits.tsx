
import { Tag, Users, Wallet } from 'lucide-react'

const Benifits = () => {
  return (
    <div className='max-container'>
      <h1 className='text-3xl sm:text-4xl font-semibold text-sky-500' > Benifits</h1>
      <div className='flex-between flex-wrap gap-6 mt-10'>
        <div className='flex-center flex-col w-full lg:w-96 border p-8 shadow-xl rounded-xl'>
          <Users size={64}/>
          <h2 className=' text-xl sm:text-2xl font-semibold mt-3 text-sky-500'>Earn Together</h2>
          <p>
            Invite friends and earn rewards together.<br />
            The more you refer, the more you earn!
          </p>
        </div>
        <div className='flex-center flex-col w-full lg:w-96 border p-8 shadow-xl rounded-xl'>
          <Tag size={64} />
          <h2 className='text-xl sm:text-2xl  font-semibold mt-3 text-sky-500'>Exclusive Rewards</h2>
          <p>
            Unlock exclusive rewards and bonuses<br />
            with each successful referral.
          </p>
        </div>
        <div className='flex-center flex-col w-full lg:w-96 border p-8 shadow-xl rounded-xl'>
          <Wallet size={64} />
          <h2 className='text-xl sm:text-2xl font-semibold mt-3 text-sky-500'>Instant Cash</h2>
          <p>
            Get instant cash rewards directly to your<br />
            account with each referral.
          </p>
        </div>
      </div>
    </div >
  )
}

export default Benifits