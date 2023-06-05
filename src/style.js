const style = {
  boxWidth: "w-full 2xl:max-w-[1280px]",

  heading2: "w-full font-poppins font-semibold, text-[40px] xs:text-[48px] text-white leading-[66.8px] xs:leading-[76.8px] ",
  paragraph: "font-poppins font-normal text-[18px] leading[30.8px] text-dimWhite",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6"
}

export const layout = {
  section: `flex md:flex-row flex-col ${style.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${style.paddingY}`,

  sectionImgReverse: `flex-1 flex ${style.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${style.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${style.flexStart} flex-col`
}

export default style
