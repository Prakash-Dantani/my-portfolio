import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Link,
  Container,
  Text,
  Preview,
  Tailwind,
} from "@react-email/components";

const EmailTemplate = ({ name = "PRakash" }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Email</Preview>
      <Tailwind>
        <Body>
          <Container className="bg-sky-100">
            <Text className="font-bold text-3xl">Welcome {name},</Text>
            {/* <Text style={heading_one}>Welcome {name},</Text> */}
            <br />
            <Text>Please click below link to continue.</Text>
            <Link href="http://localhost:3000">Home Page</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// const heading_one: CSSProperties = {
//   fontSize: "32px",
// };
export default EmailTemplate;
