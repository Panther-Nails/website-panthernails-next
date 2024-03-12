import tw, { styled,css } from "twin.macro";
// Container = tw.div`bg-sitecolor-100 text-sitecolor-300   min-h-full w-full flex-col md:(flex flex-row ) items-center justify-center   `;

export const Container = styled.div(props => [
    tw`relative w-full  overflow-hidden flex items-center gap-4 justify-center text-center bg-sitecolor-100`,
    props.Container === 'ItemscenterCol'? tw` flex-col ` :
    props.Container === 'ItemscenterColWidthhalf'? tw` flex-col h-1/2  md:(w-1/2 h-screen ) ` :
    props.Container === 'Itemshideonmovileview'? tw`hidden md:(w-1/2 h-screen block )    ` :
    props.Container === 'ItemsInPhoneAndWindow'? tw` flex-col md:flex-row ` :
    props.Container === 'ItemsInPhoneAndWindowhalf'? tw`lg:(h-screen w-full mt-0)  mt-4 h-1/2  flex-col   ` :
    props.Container === 'StickContainerontop'? tw` md:(h-screen w-1/2 ) z-30 sticky top-0  ` :
    tw``,
  ]);

  export const SimpleContainer = styled.div(props => [
    tw`relative w-full  bg-sitecolor-100`,
    props.SimpleContainer === 'Defultcontainer'? tw` md:( flex-row) flex flex-col ` :
    props.SimpleContainer === 'DefultcontainerHalf'? tw`md:w-1/2  z-10  w-full ` :
    tw``,
  ]);



// export const Container = tw.div`relative xl:(w-full flex items-center justify-center) overflow-hidden p-4 bg-sitecolor-100`;//add overflow hidden at 21-2-24, add paddinf-4 at 8-3-24
export const ContentWithPaddingXl= tw.div`max-w-screen-xl xl:(w-full  h-fourfifth) mx-auto py-20 lg:py-4`;
export const ContentWithPaddingLg= tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
export const Content2Xl= tw.div`max-w-screen-2xl mx-auto`;
