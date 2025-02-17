import React from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { HighlightedHeading, SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10 font-black`;
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

const Paragraph = tw.p`text-justify py-2 mt-2 leading-loose`;

export default ({ properties }) => {
  return (
    <>
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <HighlightedHeading>{properties.heading}</HighlightedHeading>
          </HeadingRow>
          <Text>
            <h1>TERMS OF USE</h1>
            <h3>We believe that transparency</h3>

            <Paragraph>
              PLEASE READ THESE TERMS OF USE (“Agreement”) CAREFULLY. BY
              DOWNLOADING, ACCESSING, BROWSING OR UTILIZING ANY SERVICES ON
              WEBSITE ONEAPP.PANTHERNAILS.COM AND ONE APP, AN APPLICATION FOR
              MOBILE AND HANDHELD DEVICES (“PLATFORM”), YOU CONSENT TO BE BOUND
              BY THIS TERMS OF USE AND OTHER POLICIES (INCLUDING BUT NOT LIMITED
              TO ANY REFUND AND/OR CANCELLATION POLICY AND PRIVACY POLICY) AS
              POSTED ON THE PLATFORM FROM TIME TO TIME, WHICH TAKES EFFECT ON
              THE DATE ON WHICH YOU DOWNLOAD, INSTALL OR USE THE SERVICES, AND
              CREATES A LEGALLY BINDING AGREEMENT. IF YOU DO NOT WISH TO BE
              BOUND BY THIS AGREEMENT, KINDLY DO NOT ACCESS OR UTILIZE THE
              PLATFORM AND PLEASE DELETE/REFRAIN FROM ACCESSING THE SAME.
            </Paragraph>

            <Paragraph>
              For the purpose of these Terms of Use, wherever the context so
              requires, the terms “One App”, “we”, “us” or “our” shall mean{" "}
              <strong>Panther Nails Technologies Private Limited</strong>. “You”
              shall mean any natural or legal person who is a “Visitor” (which
              means that you are merely browsing our Platform) or a “Member”
              (which means that you have registered with the application as a
              user). As long as You comply with these Terms of Use, We grant You
              a non-exclusive, non-transferable, limited right to enter and use
              Our Platform and services.
            </Paragraph>

            <Paragraph>
              The applications (One App) are owned and provided by{" "}
              <strong>Panther Nails Technologies Private Limited</strong>{" "}
              (hereinafter “Company”), a company incorporated under the
              Companies Act, 1956 and having its registered office at Hadapsar,
              Pune, India.
            </Paragraph>

            <Paragraph>
              One App is a platform that provides customers and other users
              incentives with other features such as product information,
              product selectors, coverage calculators, information in relation
              to events, registrations for the same, etc.. One App also allows
              the User to check their balance and redeem the points that have
              been accumulated.
            </Paragraph>

            <h2>AMENDMENTS</h2>

            <Paragraph>
              We reserve the right to modify the contents of this Terms of Use
              from time to time, and such modification shall come into effect
              from us posting the modifications on our Platform. You agree to be
              bound by any such modification to these Terms when You use the
              Platform subsequent to such modification. You shall, at all times,
              be responsible for regularly reviewing the Terms of Use and the
              other policies.
            </Paragraph>

            <h2>REGISTRATION OR USE OF THE PLATFORM</h2>

            <Paragraph>
              <Paragraph type="a">
                <li>
                  You must be 18 (eighteen) years or older to visit/register
                  with One App. By registering and using the services you agree
                  that you are eighteen years or above and you are not barred by
                  any law to contract and you agree to have read and accepted
                  the terms and conditions provided herein. We are under no
                  obligation to accept a request for registration.
                </li>
                <li>
                  You may access the Platform by registering to create an
                  account (“One App Account”) by providing your full name and
                  mobile number, pursuant to which you shall receive a One Time
                  Password (“OTP”) as an SMS on the mobile number provided and
                  inputting the OTP on the Platform, you may become a member
                  (“Membership”).
                </li>
                <li>
                  By registering Your mobile number with us, you consent to
                  receive, via phone calls or SMS notifications
                  subscription/service updates/information in relation to
                  events, promotions, etc.. You have the option to "opt-out" of
                  receiving future communications or request for Your name to be
                  deleted from our mailing lists by contacting the email address
                  given below. We do not guarantee that all communications sent
                  by us will be delivered in its entirety to you. You
                  acknowledge that You are responsible for all charges and
                  permissions required for accessing our Platform through Your
                  mobile network provider.
                </li>
                <li>
                  You agree to provide accurate and complete information about
                  Yourself while registering on Our Platform as a Member and
                  ensure to promptly update Your registration data to keep it up
                  to date and complete. In the case We are unable to establish
                  your unique identity against a valid mobile number, Your
                  account shall be indefinitely suspended.
                </li>
                <li>
                  You are permitted to have only have one One App account at any
                  given point in time. If you fail to comply, We reserve the
                  right to suspend such multiple accounts without being liable
                  for any compensation.
                </li>
                <li>
                  We reserve the right to disclose to third parties certain
                  data, not including personal data, related to You. If we are
                  required to share your personal information, (1) You may
                  expressly permit us to do so or (2) we are bound to share such
                  personal information by way of any applicable law or legal
                  process.
                </li>
                <li>
                  We reserve the full discretion to suspend your account in the
                  event you fail to comply with any of the terms mentioned
                  herein and do not have any liability to share any account
                  information whatsoever.
                </li>
              </Paragraph>
            </Paragraph>

            <h2>SERVICES OFFERED</h2>

            <Paragraph>
              <Paragraph type="a">
                <li>
                  One App provides a number of internet-based services through
                  the Platform like redeeming points pursuant to a claim code
                  upon the purchase of a product, check balance of the points
                  available for you, redeem the points either for cash or gift,
                  as provided in the gift brochure (“Gift”), register for
                  events, provide product information, permit product selection
                  (i.e. identifying the right product for the desired
                  application), help center, product coverage calculator, taking
                  surveys, etc..
                </li>
                <li>
                  Each product of ours that is purchased by you may contain a
                  coupon with a claim code printed on it along with a QR code.
                  You represent and warrant that you have purchased our product
                  and therefore are entitled to use the claim code. The claim
                  code is nontransferable.
                </li>
                <li>
                  Upon becoming a Member, you must scan the QR code and the
                  corresponding points shall be credited to your account.
                </li>
                <li>
                  You can either redeem the points for cash at the rate of Re.
                  1/- per point redeemed, asper the Cash Policy or accumulate
                  points and redeem it for a Gift, as per the Gift Policy. The
                  Gift along with the points required to purchase the Gift is
                  available in the Gift Policy. The MRP of the Gift may not
                  match the number of points required to purchase the Gift.
                </li>
                <li>
                  The claim code coupon must be maintained by the buyer as
                  evidence of points, in the event of a dispute.
                </li>
                <li>
                  If in a transaction performed by You on the Platform, there is
                  a change in points or the cash has not been received in you
                  bank account within 7 working days, then You shall inform us
                  by sending an e mail to our customer services e mail address
                  mentioned hereunder.
                </li>
              </Paragraph>
            </Paragraph>

            <h2>CASH POLICY</h2>

            <Paragraph>
              <Paragraph type="a">
                <li>
                  In the event that you wish to redeem the points for a cash
                  back into your account, you will be required to provide your
                  bank account details like name, bank name, branch details,
                  IFSC code and account number. This information will be treated
                  as personal information and governed by the Privacy Policy.
                  You represent and warrant that the information provided is
                  current and accurate. Panther Nails will not be liable for any
                  discrepancies and consequent losses or damages.
                </li>
                <li>
                  In the event that there is any misuse or theft of handheld
                  device, you are required to inform us to suspend the account
                  and prevent the changes of any personal information on the
                  Platform.
                </li>
                <li>
                  In the event that any KYC information or other compliance
                  required under law is required from you to complete the cash
                  back policy, you agree to provide the same as per the
                  timelines mentioned.
                </li>
              </Paragraph>
            </Paragraph>

            <h2>GIFT POLICY</h2>

            <Paragraph type="a">
              <li>
                Panther Nails do not own, sell, resell on its own and/or do not
                control and of the products given as gifts. You understand that
                any Gift purchased by you shall be subject to the terms and
                conditions set out in these Terms of Use including, but not
                limited to, product availability and delivery location
                serviceability. In the event the Gift is unavailable or
                undeliverable for any reason whatsoever, you will be notified as
                soon as reasonably possible and the points will be returned to
                your account.
              </li>
              <li>
                The Gifts will be restricted to the items listed on the
                Platform.
              </li>
              <li>
                You consent to paying any additional costs for shipping, taxes,
                etc. for delivery of the Gift.
              </li>
              <li>
                Once a Gift is purchased by way of points, We do not offer any
                refunds against the same unless an error that is directly
                attributable to us has occurred during the purchase of such a
                Gift.
              </li>
              <li>
                Panther Nails disclaims and waives any liability arising out of
                any incorrect or inaccurate warranty in relation to the
                specifics (like description, quality, marketability, servicing,
                etc.) of the Gift.
              </li>
              <li>
                The images of the Gifts shown are for visual representation only
                and may vary from the actual product.
              </li>
              <li>
                Product warranty in relation to the Gift shall be regulated by
                the terms and conditions mentioned on the warranty card of
                respective products and Panther Nails shall not be liable or
                responsible to the customer in for any indirect or consequential
                loss or damage.
              </li>
            </Paragraph>

            <h2>USER CONDUCT</h2>

            <Paragraph>
              You agree, undertake and confirm that Your use of the Platform
              shall be strictly governed by the following binding principles:
            </Paragraph>

            <Paragraph type="a">
              <li>
                You shall not directly or indirectly do or cause any action, on
                the Platform, which:
                <Paragraph type="i">
                  <li>
                    Promotes information that you know is false or misleading or
                    promotes illegal activities or conduct that is abusive,
                    threatening, obscene, defamatory or libellous, including a
                    photograph of another person that you have posted without
                    that person’s consent or otherwise constitutes an invasion
                    of an individual’s privacy or infringement of publicity
                    rights
                  </li>
                  <li>
                    Involves commercial activities and/or sales without Panther
                    Nails’s prior written consent, such as contests,
                    sweepstakes, barter, advertising, and/or pyramid schemes
                  </li>
                  <li>
                    Provides any telephone numbers, street addresses, last names
                    or email addresses of anyone other than your own
                  </li>
                  <li>
                    Solicits passwords or personal identifying information from
                    other Users
                  </li>
                  <li>Harasses or advocates harassment of another person</li>
                  <li>
                    Involves the transmission of “junk mail,” “chain letters,”
                    or unsolicited mass mailing, instant messaging, “spimming,”
                    or “spamming”
                  </li>
                  <li>
                    Furthers or promotes any criminal activity or enterprise or
                    provides instructional information about illegal activities
                    including, but not limited to making or buying illegal
                    weapons, violating someone’s privacy, or providing or
                    creating computer viruses.
                  </li>
                  <li>
                    Is offensive and/or promotes racism, bigotry, hatred or
                    physical harm of any kind against any group or individual.
                  </li>
                  <li>Exploits people in a sexual or violent manner</li>
                  <li>
                    Contains nudity, violence, pornography, sexually explicit
                    material or offensive subject matter
                  </li>
                </Paragraph>
              </li>

              <li>
                You shall not pretend that you are, or that you represent,
                someone else, or impersonate any other individual or entity.
              </li>
              <li>
                You shall not use the Platform or any content on the Platform
                for any purpose that is unlawful or prohibited by these Terms of
                Use, or to solicit the performance of any illegal activity or
                other activity that infringes the rights of Panther Nails.
              </li>
              <li>
                You shall not make any negative or defamatory statement(s) or
                comment(s) about us or our domain name or the name One App or
                engage in any conduct or action that might tarnish the image or
                reputation, of Panther Nails on Platform or otherwise tarnish or
                dilute any Panther Nails’s trade or service marks, trade name
                and/or goodwill associated with such trade or service marks, as
                may be owned or used by us.
              </li>
              <li>
                You shall not launch any “page-scrape”, “deep-link”, “spider”,
                “robot”, or other automatic device, program or code etc. to
                access, copy or monitor any portion of the Platform, to acquire
                or attempt to acquire any materials, documents or information
                through any means not intentionally available on the Platform.
                We reserve our right to prohibit any such activity and suspend
                your account immediately.
              </li>
              <li>
                You agree that you will not take any action that imposes an
                unreasonable or disproportionately large load on the
                infrastructure of the Platform or Panther Nails’s systems or
                networks.
              </li>
              <li>
                You shall not attempt to gain unauthorized access to any portion
                or feature of the Platform, or any other systems or networks
                connected to the Platform or to any server, computer, network,
                or to any of the services offered on or through the Platform, by
                hacking, “password mining” or any other illegitimate means.
              </li>
              <li>
                You agree not to use any device, software or routine to
                interfere or attempt to interfere with the proper working of the
                Platform or any transaction being conducted on the Platform, or
                with any other person’s use of the Platform.
              </li>
              <li>
                You shall at all times ensure full compliance with the
                applicable provisions, as amended from time to time.
              </li>
            </Paragraph>

            <h2>DISCLAIMER AND LIMITATION OF LIABILITY</h2>

            <Paragraph type="a">
              <li>
                Panther Nails does not warrant or represent that the material on
                the platform is accurate, complete or current or that the
                website will be free of defects or viruses.
              </li>
              <li>
                All the materials and products (including but not limited to
                software) and services, included on or otherwise made available
                to You through Platform are provided on "as is" and "as
                available" basis without any representation or warranties,
                express or implied except otherwise specified in writing.
              </li>
              <li>
                We shall not be liable to You or anyone else for any losses or
                injury arising out of or relating to the information provided on
                the Platform. In no event will we or our employees, affiliates,
                authors or agents be liable to you or any third party for any
                decision made or action taken by your reliance on the content
                contained herein.
              </li>
              <li>
                You acknowledge that third party services may be available on
                the Platform. We may have formed partnerships or alliances with
                some of these third parties from time to time in order to
                facilitate the provision of certain services to you. However,
                you acknowledge and agree that at no time are we making any
                representation or warranty regarding any third party’s services
                or products nor will we be liable to you or any third party for
                any consequences or claims arising from or in connection with
                such third party including, and not limited to, any liability or
                responsibility for, death, injury or impairment experienced by
                you or any third party. You hereby disclaim and waive any rights
                and claims you may have against us with respect to third party’s
                / merchants services.
              </li>
              <li>
                In no event shall Panther Nails be liable for any indirect,
                punitive, incidental, special, consequential damages or any
                other damages resulting from:
                <Paragraph type="i">
                  <li>
                    the use or the inability to use the Platform, services ,
                    products or Gift
                  </li>
                  <li>
                    unauthorized access to or alteration of the user's
                    transmissions or data
                  </li>
                  <li>
                    breach of condition, representations or warranties by the
                    manufacturer of the Gift or the products displayed on the
                    Platform.
                  </li>
                  <li>
                    any other matter relating to the services including, without
                    limitation, damages for loss of use, data or profits,
                    arising out of or in any way connected with the use or
                    performance of the Platform or service. Panther Nails shall
                    not be held responsible for non-availability of the Platform
                    during periodic maintenance operations or any unplanned
                    suspension of access to the Platform. Any material and/or
                    data downloaded from the Platform is solely at Your own
                    discretion and risk and You will be solely responsible for
                    any damage to your mobile or loss of data that results from
                    such download. To the maximum extend that is permissible
                    under law, Panther Nails’s liability shall be limited to an
                    amount or Rs. 100/-
                  </li>
                </Paragraph>
              </li>
            </Paragraph>

            <h2>WAIVER OF LIABILITY</h2>

            <Paragraph>
              You agree and acknowledge that no delay or decision not to enforce
              rights under this Agreement will constitute a waiver of the right
              to do so and will not affect rights in relation to any subsequent
              breach.
            </Paragraph>

            <Paragraph>
              You agree and acknowledge that We will, however, not be liable for
              any loss or damage (in contract, negligence or otherwise) where:
            </Paragraph>

            <Paragraph type="a">
              <li>
                There is no breach of a legal duty of care owed to you by us;
              </li>
              <li>
                The loss or damage is not a reasonably foreseeable result of any
                such breach; or
              </li>
              <li>
                Any loss or damage or increase in loss or damage results from a
                breach by you of these terms and conditions.
              </li>
              <li>
                Panther Nails or its directors shall not be liable for any
                indirect, consequential or other damages caused to the user.
              </li>
            </Paragraph>

            <h2>THIRD PARTY RIGHTS</h2>

            <Paragraph>
              Nothing in this Agreement is intended to nor shall confer a
              benefit on any third party and any person who is not a party to
              this Agreement has no rights to enforce them.
            </Paragraph>

            <h2>
              Theft of handheld device or suspected misuse of your account by a
              third party:
            </h2>

            <Paragraph>
              In the event that you have lost your handheld device or suspect or
              have reason to believe that a third party has had unauthorised
              access to your account, you shall inform us immediately of the
              same and your account shall be temporarily suspended. We shall
              attempt to provide a fresh password and keep your information as
              safe as practicably possible.
            </Paragraph>

            <h2>INDEMNITY</h2>

            <Paragraph>
              You shall indemnify and hold harmless Panther Nails, its owner,
              licensee, affiliates, subsidiaries, group companies (as
              applicable) and their respective officers, directors, agents, and
              employees, from any claim or demand, or actions including
              reasonable legal fees, made by any third party or penalty imposed
              due to or arising out of Your breach of this Terms of Use, privacy
              Policy and other Policies, or Your violation of any law, rules or
              regulations or the rights (including infringement of intellectual
              property rights) of a third party.
            </Paragraph>

            <h2>INTELLECTUAL PROPERTY RIGHTS</h2>

            <Paragraph>
              All materials on our Platforms, including, without limitation,
              names, logos, trademarks, images, text, columns, graphics, videos,
              photographs, illustrations, artwork, software and other elements
              (collectively, “Proprietary Information”) are protected by
              copyrights, trademarks and/or other intellectual property rights
              owned and controlled by Panther Nails. You acknowledge and agree
              that all content on our Platforms is made available for limited,
              noncommercial, personal use only. Except as specifically provided
              herein or elsewhere in our Platforms, no Proprietary Information
              may be copied, reproduced, republished, sold, downloaded, posted,
              transmitted or distributed in any way, or otherwise used for any
              purpose, by any person or entity, without Our prior express
              written permission. You may not add, delete, distort, or otherwise
              modify the Proprietary Information. Any unauthorized attempt to
              modify any Proprietary Information, to defeat or circumvent any
              security features, or to utilize our Platforms or any part of the
              Proprietary Information for any purpose other than its intended
              purposes is strictly prohibited.
            </Paragraph>

            <h2>NOTIFICATION OF ERRORS</h2>

            <Paragraph>
              If you encounter any error while viewing any content on our
              Platform, kindly notify us of the same at the earliest either by
              mail or phone.
            </Paragraph>

            <h2>TERMINATION</h2>

            <Paragraph type="a">
              <li>
                If at any time you wish to terminate your registration as a
                Member, kindly notify us of your intention by sending us a mail
                to the e-mail id given hereunder.
              </li>
              <li>
                Panther Nails reserves the right to suspend or terminate your
                use of One App, if we believe, in our sole and absolute
                discretion that you have infringed, breached, violated, abused,
                or unethically manipulated or exploited any term of these Terms
                of Use or anyway otherwise acted unethically. In such an event,
                all points that have been accumulated by you shall stand
                forfeited and you shall not be entitled to any compensation or
                redemption of any accumulated points.
              </li>
            </Paragraph>

            <h2>JURISDICTION AND GOVERNING LAW</h2>

            <Paragraph>
              Panther Nails makes no representation that materials in the
              Platform are appropriate or available for use in other
              locations/countries other than India or conditions different form
              the information provided by You. In the event the Platform is
              accessed from outside India, it shall be deemed that the cause of
              action in any dispute under this Agreement has arisen in India.
            </Paragraph>

            <Paragraph>
              These terms shall be governed by and constructed in accordance
              with the laws of India without reference to conflict of laws
              principles and disputes arising in relation hereto shall be
              subject to the exclusive jurisdiction of courts, tribunals, fora,
              applicable authorities at Hyderabad. The place of jurisdiction
              shall be exclusively in Hyderabad.
            </Paragraph>

            <h2>FORCE MAJEURE</h2>

            <Paragraph>
              Panther Nails shall not be liable and to the extent, that the
              performance or delay in performance of any of its obligations are
              prevented, restricted, delayed or interfered with due to
              circumstances beyond the reasonable control and without the fault
              or negligence of such Party, including but not limited to change
              in legislation, fire, flood, explosion, epidemic, accident, act of
              God, war, riot, strike, lockout, traffic or other concerted act of
              workmen and/or act of Government.
            </Paragraph>

            <h2>SEVERABILITY</h2>

            <Paragraph>
              If any of these Terms of Use should be determined to be illegal,
              invalid or otherwise unenforceable by reason of the laws of any
              state or country in which these Terms of Use are intended to be
              effective, then to the extent and within the jurisdiction where
              that term is illegal, invalid or unenforceable, it shall be
              severed and deleted and the remaining Terms of Use shall survive,
              remain in full force and effect and continue to be binding and
              enforceable.
            </Paragraph>

            <h2>GRIEVANCE OFFICER</h2>
            <Paragraph>
              For any grievances related to data privacy, you can contact our
              grievance officer ({properties.legalName}) via email at : (
              <a href={`mailto:${properties.legalEmail}`}>
                {properties.legalEmail}
              </a>
              )
            </Paragraph>
            <hr />
          </Text>
        </ContentWithPaddingXl>
      </Container>
    </>
  );
};
