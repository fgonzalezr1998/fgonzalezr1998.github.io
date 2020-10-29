import React from "react"
import "../styles/left_header.css"
import Avatar from "./Avatar.js"
import MenuItems from "./MenuItems.js"

import Me from "../images/me.jpg"

function LeftHeader() {
  return(
    <div id="left-header">
      <div id="avatar">
        <Avatar name="Fernando González" img={Me} />
      </div>

      <MenuItems />

    </div>
  )
}

export default LeftHeader;
