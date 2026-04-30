
import { Mail, MailOpenIcon } from 'lucide-react';
import PasswordForm from '../components/Secret/PasswordInput';
import BannerSection from '../components/common/BannerSection';
import NewsLetter from '../components/common/NewsLetter'
const Secret = () => {
  return (
       <div className="w-full relative">
  <BannerSection title="Secret" />
  
      <PasswordForm />
       <NewsLetter />
      </div>
  )
}

export default Secret