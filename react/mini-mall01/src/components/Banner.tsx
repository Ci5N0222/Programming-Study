import bannerImage from '../assets/img/main-bg.png'

export const Banner = () => {
  return (
    <div className="main-bg" style={{ backgroundImage: 'url(' + bannerImage + ')' }}></div>
  )
}