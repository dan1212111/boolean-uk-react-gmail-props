import React from "react"
import { Email } from "./Email"

export function Emails(props) {
  let filteredEmails = props.emails
  if (props.hideRead) filteredEmails = props.getReadEmails(props.filteredEmails)
  if (props.currentTab === "starred")
    filteredEmails = props.getStarredEmails(filteredEmails)

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            email={email}
            index={index}
            toggleStar={props.toggleStar}
            toggleRead={props.toggleRead}
          />
        ))}
      </ul>
    </main>
  )
}
