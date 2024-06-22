import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
const Post = tw.a`flex flex-col h-full bg-gray-200 rounded`;
const PostImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 sm:h-80 bg-center bg-no-repeat bg-contain rounded-t`}
`;
//  ${tw`h-64 sm:h-80 bg-center bg-cover rounded-t`}

const PostText = tw.div`flex-1 px-6 py-8`;
const PostTitle = tw.h6`font-bold group-hocus:text-primary-500 transition duration-300 `;
const PostDescription = tw.p``;
const AuthorInfo = tw.div`flex`;
const AuthorImage = tw.img`w-12 h-12 rounded-full mr-3`;
const AuthorTextInfo = tw.div`text-xs text-gray-600`;
const AuthorName = tw.div`font-semibold mt-2`;
const AuthorProfile = tw.div`pt-1 font-medium`;

const PostContainer = styled.div`
  ${tw`relative z-20 mt-10 sm:pt-3 pr-3 w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto sm:max-w-none sm:mx-0`}

  ${(props) =>
    props.featured === "true" &&
    css`
      ${tw`w-full sm:w-full lg:w-2/3`}
      ${Post} {
        ${tw`sm:flex-row items-center sm:pr-3`}
      }
      ${PostImage} {
        ${tw`sm:h-80 sm:min-h-full w-full  sm:w-1/2 rounded-t sm:rounded-t-none sm:rounded-l`}
      }
      ${PostText} {
        ${tw`pl-8 pr-5`}
      }
      ${PostTitle} {
        ${tw`text-2xl`}
      }
      ${PostDescription} {
        ${tw`mt-4 text-sm font-semibold text-gray-600 leading-relaxed`}
      }
      ${AuthorInfo} {
        ${tw`mt-8 flex items-center`}
      }
      ${AuthorName} {
        ${tw`mt-0 font-bold text-gray-700 text-sm`}
      }
    `}
`;

export default ({ index, properties, children, data }) => {
  return (
    <>
      <PostContainer featured={properties.featured} key={index}>
        <Post className="group" href={properties.url} target="_blank">
          <PostImage imageSrc={properties.imageSrc} />
          <PostText>
            <PostTitle>{properties.heading}</PostTitle>
            {properties.featured && (
              <PostDescription>{properties.description}</PostDescription>
            )}
            <AuthorInfo>
              {properties.featured === "true" && (
                <AuthorImage src={properties.profileImageSrc} />
              )}
              {properties.featured === "true" && (
                <AuthorTextInfo>
                  <AuthorName>{properties.name}</AuthorName>
                  {properties.featured && (
                    <AuthorProfile>{properties.profile}</AuthorProfile>
                  )}
                </AuthorTextInfo>
              )}
            </AuthorInfo>
          </PostText>
        </Post>
      </PostContainer>
    </>
  );
};
