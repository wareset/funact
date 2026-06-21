import { Navbars } from './_include/Navbars'
import { Buttons } from './_include/Buttons'
import { Typography } from './_include/Typography'
import { Tables } from './_include/Tables'
import { Forms } from './_include/Forms'
import { Navs } from './_include/Navs'
import { Indicators } from './_include/Indicators'
import { Progress } from './_include/Progress'
import { Containers } from './_include/Containers'
import { Dialogs } from './_include/Dialogs'

export default function Bootstrap() {
  return (
    <div className='container'>
      <Navbars />
      {/* <Buttons />
      <Typography />
      <Tables />
      <Forms />
      <Navs />
      <Indicators />
      <Progress />
      <Containers />
      <Dialogs /> */}
    </div>
  )
}
