import * as React from "react"
import {InlineLink} from "../patterns/link";

const NotFoundPage = () => {
  return (
    <>
      <h1>Error 404 :(</h1>
      <p>
        Upps something happened here not correctly...
      </p>
      <p>
        better get back on track, back to <InlineLink to="/">homepage</InlineLink> and another chance :)
      </p>
    </>
  )
}

export default NotFoundPage
