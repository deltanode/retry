import { logo } from "../assets"
import style from "../style"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className={`${style.paddingY}`}>
      <div className="flex justify-between flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <img src={logo} alt="logo" className="" />
          <p className={`${style.paragraph} pt-4`}>
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>

        <div className="flex-1 flex justify-between items-start flex-wrap gap-4">
          {footerLinks.map(footerLink => {
            return (
              <div key={footerLink.title} className="">
                <h4 className="font-poppins font-semibold text-[18px] text-white  pb-4">{footerLink.title}</h4>

                <ul>
                  {footerLink.links.map(link => {
                    return (
                      <li key={link.name} className="pb-4">
                        <a href={link.link} className="font-poppins font-normal text-dimWhite">
                          {link.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-dimWhite flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">
        <p className="font-poppins font-normal text-[18px] text-white">Copyright © 2021 HooBank. All Rights Reserved.</p>
        <div className="flex items-center justigy-end gap-4">
          {socialMedia.map(social => {
            return (
              <a key={social.id} href={social.link}>
                <img src={social.icon} alt={social.icon} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
