import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../infrastructure/theme/fonts';
import {Spacer} from '../../../components/spacer/spacer.component';
import {Text} from '../../../components/typography/text.component';
import {
  RestaurantCard,
  RestaurantCardCover,
  Rating,
  Address,
  Info,
  Section,
  SectionEnd,
  Icon,
} from './restaurant-info-card.styles';

export interface Restaurant {
  name: string;
  icon?: string;
  photos?: string;
  address?: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosedTemporarily?: boolean;
}

export interface TextProps {
  fontFamily?: string;
  fontSize?: string;
  padding?: number;
  color?: string;
}

export const RestaurantInfoCard = ({restaurant}: {restaurant: Restaurant}) => {
  const {
    name = 'Example Name',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large" children={undefined} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" children="" />
            <Icon source={{uri: icon}} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

// const AppText = styled(Text)`
//   font-family: 'Oswald-VariableFont_wght';
//   font-size: 16;
//   padding: 10px;
// `;

// const HeaderText = styled(Text)`
//   font-family: ${fonts.body};
//   font-size: ${fontSizes.body};
//   padding: 10px;
//   font-weight: ${fontWeights.bold};
// `;
