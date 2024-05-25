import React from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "Privacy Policy" }) => {
  return (
    <>
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <h3>
              We believe that protecting privacy is part of maintaining that
              trust
            </h3>
            <p>
              <strong>PANTHER NAILS TECHNOLOGIES PRIVATE LIMITED</strong>{" "}
              (“Company”) is the author and publisher of the mobile application
              RASIK and auther of business branded application owned by
              business. The mobile application shall be referred to by the name
              of ‘App’ wherever applicable in this document.{" "}
            </p>

            <p>
              BY USING THE APPLICATION OR THE SERVICES OF OUR COMPANY OR BY
              PROVIDING YOUR INFORMATION, YOU CONSENT TO BE BOUND BY THE TERMS
              OF THIS PRIVACY POLICY AND THE TERMS OF USE. YOU AGREE TO THE
              PRACTICES AND POLICIES IN THIS PRIVACY POLICY AND YOU ALSO AGREE
              TO THE SHARING OF YOUR INFORMATION AS DESCRIBED IN THIS PRIVACY
              POLICY. WE RESERVE THE RIGHT TO AMEND THE TERMS OF THIS PRIVACY
              POLICY AT ANY TIME, AT OUR SOLE DISCRETION. IF YOU DO NOT AGREE
              WITH THE TERMS OF THIS PRIVACY POLICY, WE REQUEST YOU TO REFRAIN
              FROM USING OUR SERVICES AND NOT PROVIDE US YOUR INFORMATION.
            </p>

            <p>
              This privacy policy ("Privacy Policy") explains how we (the
              Company) collect, use, share and protect your personal information
              (jointly and severally referred to as “You” or “Users” in this
              Privacy Policy). This also includes the Partners. This may include
              sensitive personal data or information and the purpose, means and
              modes of usage of such information shall be provided. We have
              created this Privacy Policy to demonstrate our commitment to the
              protection of your privacy and your personal information. Your use
              of and access to the services is subject to this Privacy Policy
              and our Terms of Use.
            </p>

            <h2>DEFINITIONS</h2>

            <ol>
              <li>
                <p>
                  <strong>"Business"</strong> shall mean the organization that
                  has choose to Panther Nails services on their business branded
                  applicaiton.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  <strong>"Publisher"</strong> shall mean the owner of the
                  application. In case of Rasik App or One App, Panther Nails is
                  the owner of the application. Otherwise, Business will be the
                  publisher of the application.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  <strong>"User"</strong> shall mean the user of the
                  application.{" "}
                </p>
              </li>
              <li>
                <p>
                  <strong>"App"</strong> shall mean the mobile application used
                  by the user.
                </p>
              </li>
            </ol>

            <h2>CONTEXT AND PURPOSE</h2>

            <p>
              This Privacy Policy is published in compliance with Section 43A of
              the Information Technology Act, 2000, Regulation 4 of the
              Information Technology (Reasonable Security Practices and
              Procedures and Sensitive Personal Information) Rules, 2011
              (hereinafter referred as the “SPDI Rules”) and Regulation 3(1) of
              the Information Technology (Intermediaries Guidelines) Rules,
              2011.
            </p>

            <h2>COLLECTION OF PERSONAL INFORMATION</h2>

            <p>
              Our services require us to authenticate and know who you are, so
              that we can best meet your needs. When you access the services, we
              may ask you to voluntarily provide us with certain information
              that personally identifies you or could be used to personally
              identify you. Without prejudice to the generality of the above,
              information collected by us from you, while you create an account
              for yourself on the application, may include (but is not limited
              to) the following:
              <ol>
                <li>Name, address, mobile number</li>
                <li>Bank details</li>
                <li>Data regarding your usage of the services.</li>
                <li>
                  Other information that you voluntarily choose to provide to us
                  such as information shared by you with us through emails or
                  calls.
                </li>
              </ol>
            </p>

            <p>
              This information collected from you by the publisher may
              constitute ‘personal information’ or ‘sensitive personal data or
              information’ as defined under Rule 2(i) and Rule 3 of the SPDI
              Rules.
            </p>

            <h2>DISCLOSURE OF DATA</h2>

            <p>
              The publisher my share the data with the applicaiton affiliates
              and third-party service providers, or vendors contracted to
              provide services on the publisher's behalf. These third-party
              service providers or vendors may use the data we provide to them
              only as instructed by the publisher.
            </p>

            <p>
              Information that is freely available in the public domain or
              accessible under the Right to Information Act, 2005 or any other
              law will not be regarded as personal information or sensitive
              personal data or information.
            </p>

            <h2>DATA RETENTION</h2>

            <p>
              The publisher will retain your personal data at least if necessary
              to fulfil the service that you have requested, comply with any
              laws or regulations, resolve disputes, and enforce our agreements.
              The publisher may retain your data longer for a legitimate
              business interest where business benefit is not outweighed by your
              personal rights and freedoms. Data entered in the app is retained
              in accordance with any applicable agreement between the publisher
              and its customers.{" "}
            </p>

            <h2>PRIVACY STATEMENTS</h2>

            <ol>
              <li>
                <strong>CONSENT TO THE PRIVACY POLICY</strong>
                <p>
                  By affirming your assent to this Privacy Policy, you provide
                  your consent to such collection as required under applicable
                  law.
                </p>
              </li>

              <li>
                <strong>INFORMATION COLLECTED FROM THE USER</strong>
                <p>
                  All/any information provided by you, including sensitive
                  information, is voluntary and we reserve the right to use such
                  information provided by or about you for the following
                  purposes:
                  <ol type="a">
                    <li>
                      Publishing individual’s information on the app. This
                      information is accessible only by the individual who has
                      generated this data on his/her own or through Partners.
                    </li>
                    <li>
                      Contacting you for taking product and service feedback.
                    </li>
                    <li>
                      Analysing software usage patterns for improving product
                      design and utility.
                    </li>
                    <li>Help promote safe services</li>
                    <li>
                      Inform you about offers, products, services, updates,
                      customize your experience, detect & protect us against
                      error, fraud, and other criminal activity, enforce our
                      terms and conditions, etc.
                    </li>
                    <li>
                      To send you offers, product information, events,
                      educational information, etc. based on your previous
                      orders and interests.
                    </li>
                  </ol>
                </p>
              </li>

              <li>
                <strong></strong>
                <p>
                  the publisher takes your right to privacy very seriously and
                  other than as specifically stated in this privacy policy, we
                  will only disclose your personal information in the event it
                  is required to do so by law, rule, regulation, law enforcement
                  agency, governmental official, legal authority or similar
                  requirements or when Panther Nails , in its sole discretion,
                  deems it necessary in order to protect its rights or the
                  rights of others, to prevent harm to persons or property, to
                  fight fraud and credit risk, or to enforce or apply the Terms
                  of Use.
                </p>
              </li>

              <li>
                <p>
                  We also reserve the right to, periodically, reveal general
                  statistical information about the application & its users,
                  such as number of visitors, number and type of goods and
                  services purchased, etc.
                </p>
              </li>

              <li>
                <strong>YOUR DUTIES</strong>
                <p>
                  You are responsible for maintaining the accuracy of the
                  information you submit to us, such as your contact information
                  provided as part of account registration. If your personal
                  information changes, you may amend the information by making
                  necessary changes wherever possible or by contacting us
                  through support. If you wish to make changes to the bank
                  details provided by you, kindly contact us by calling the
                  helpline number provided. We will make the requested changes
                  in our then active databases as soon as possible. If you
                  provide any information that is untrue, inaccurate, out of
                  date or incomplete, or RASIK has reasonable grounds to suspect
                  that the information provided by you is untrue, inaccurate,
                  out of date or incomplete, the publisher may at its sole
                  discretion, discontinue the provision of the services to you.
                </p>
              </li>

              <li>
                <strong>TERMINATION</strong>

                <p>
                  If you wish to cancel your account or request that we no
                  longer use your information to provide you services, contact
                  us through support. We shall not retain such personal
                  information unless required under any other law for the time
                  being in force.{" "}
                </p>
              </li>

              <li>
                <strong>CYBER INFORMATION and COOKIES</strong>
                <ol>
                  <li>
                    <p>
                      The app uses temporary storage to store certain data (that
                      is not sensitive personal data or information) that is
                      used by the publisher for technical administration,
                      research, and development, and for User administration,
                      which maybe shared with third parties.
                    </p>
                  </li>
                </ol>
              </li>

              <li>
                <p>
                  This Privacy Policy applies to services that are owned and
                  operated by the Company. The app and/or the Company does not
                  exercise control over the sites linked from within its
                  services and waives all responsibility and liability towards
                  data collected from such links. If you decide to visit a
                  third-party website linked to the website, understand you do
                  this entirely at your own risk.
                </p>
              </li>

              <li>
                <strong>SECURITY MEASURES</strong>
                <ol>
                  <li>
                    The Publisher has adopted the best international market
                    practices and security policies, rules and technical
                    measures to protect the personal data that it has under its
                    control from unauthorized access, improper use or
                    disclosure, accidental loss, unlawful destruction and
                    unauthorized modification. The Publisher will not be held
                    liable in case of any loss incurred by the User or any loss
                    of data due to theft of the User’s electronic devices
                    (mobile phone).
                  </li>
                  <li>
                    The reasonable security practices and procedures implemented
                    by The Publisher include but are not limited to:
                    <ol type="a">
                      <li>
                        encrypting data when it is on the move using industry
                        standard practices,
                      </li>
                      <li>keeping all the data within a private cloud,</li>
                      <li>regularly changing production keys and password,</li>
                      <li>
                        secure and very limited access to all production
                        servers,
                      </li>
                      <li>
                        performing regular security updates on our servers and
                        more.
                      </li>
                    </ol>
                    In spite of implementing such measures, if a User incurs a
                    loss due to hacking, phishing or other such techniques, then
                    the publisher will not be held liable for the same.
                  </li>
                </ol>
              </li>

              <li>
                All sub clauses of Clause 4 apply to Users and all Partners.
              </li>
            </ol>

            <h2>CONFIDENTIALITY</h2>

            <ol>
              <li>
                <p>
                  Your Personal Information is maintained by the publisher in
                  electronic form on its equipment, and on the equipment of its
                  employees. The publisher takes all necessary precautions to
                  protect your personal information both online and offline and
                  implements reasonable security practices and measures
                  including certain technical, operational, managerial, and
                  physical security control measures that commensurate with
                  respect to the information being collected and the nature of
                  the publishers business.
                </p>
              </li>
              <li>
                <p>
                  The publisher will not be liable for any unauthorized use of
                  your account. If you suspect an unauthorized use of your
                  account, at any time, you must immediately notify the
                  publisher by contacting support. You shall be liable to
                  indemnify the publisher for any loss suffered by us due to
                  such unauthorized use of your account.
                </p>
              </li>
              <li>
                <p>
                  The publisher makes your information accessible to its
                  employees, agents, or partners and third parties only on a
                  need-to-know basis and binds all such parties to strict
                  confidentiality obligations.
                </p>
              </li>
              <li>
                <p>
                  Notwithstanding the above, the publisher is not responsible
                  for the confidentiality, security, or distribution of your
                  personal information by our partners and third parties outside
                  the scope of our agreement with such partners and third
                  parties. Further, Panther Nails shall not be held responsible
                  for any breach of security or for any action by third parties
                  or events that are beyond the reasonable control of Panther
                  Nails including, acts of government, computer hacking,
                  unauthorized access to computer data and storage device,
                  system failure, breach of security and encryption, poor
                  quality of your Internet service or mobile phone service, etc.
                </p>
              </li>
            </ol>

            <h2>SECURITY</h2>

            <p>
              The publisher uses technical and organizational measures that
              provide a level of security appropriate to the risk of processing
              your personal data. However, the security of information
              transmitted through the internet can never be guarenteed. You are
              responsible for maintaining the security of your password and
              other form of authentication involved in accessing password
              protected or secured resources.
            </p>

            <h2>AMENDMENTS TO PRIVACY POLICY</h2>

            <p>
              The Publisher may update this privacy policy at any time, with or
              without advance notice. If you use the services of the Company or
              access the application after a notice of amendment has been sent
              to him/her, you hereby provide your consent to the amended terms.
            </p>

            <h2>GRIEVANCE OFFICER</h2>
            <p>
              For any grievances related to data privacy, you can contact our
              grievance officer (Rahul Daga) via email at : (
              <a href="mailto:legal@panthernails.com">legal@panthernails.com</a>
              )
            </p>

            <hr />
          </Text>
        </ContentWithPaddingXl>
      </Container>
    </>
  );
};
