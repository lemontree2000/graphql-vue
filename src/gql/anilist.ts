import gql from "graphql-tag";

export const testQueryGql = gql`
  query test {
    user {
      name
      age
    }
  }
`;

export const pageInfoFragment = gql`
  fragment pageInfoFragment on PageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
`;

export const pagesQueryGql = gql`
  query getPages(
    $page: Int = 1
    $id: Int
    $type: MediaType
    $isAdult: Boolean = false
    $search: String
    $format: [MediaFormat]
    $status: MediaStatus
    $countryOfOrigin: CountryCode
    $source: MediaSource
    $season: MediaSeason
    $seasonYear: Int
    $year: String
    $onList: Boolean
    $yearLesser: FuzzyDateInt
    $yearGreater: FuzzyDateInt
    $episodeLesser: Int
    $episodeGreater: Int
    $durationLesser: Int
    $durationGreater: Int
    $chapterLesser: Int
    $chapterGreater: Int
    $volumeLesser: Int
    $volumeGreater: Int
    $licensedBy: [String]
    $genres: [String]
    $excludedGenres: [String]
    $tags: [String]
    $excludedTags: [String]
    $minimumTagRank: Int
    $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC]
  ) {
    Page(page: $page, perPage: 30) {
      pageInfo {
        ...pageInfoFragment
      }
      ppinfo: pageInfo {
        ...pageInfoFragment
      }
      media(
        id: $id
        type: $type
        season: $season
        format_in: $format
        status: $status
        countryOfOrigin: $countryOfOrigin
        source: $source
        search: $search
        onList: $onList
        seasonYear: $seasonYear
        startDate_like: $year
        startDate_lesser: $yearLesser
        startDate_greater: $yearGreater
        episodes_lesser: $episodeLesser
        episodes_greater: $episodeGreater
        duration_lesser: $durationLesser
        duration_greater: $durationGreater
        chapters_lesser: $chapterLesser
        chapters_greater: $chapterGreater
        volumes_lesser: $volumeLesser
        volumes_greater: $volumeGreater
        licensedBy_in: $licensedBy
        genre_in: $genres
        genre_not_in: $excludedGenres
        tag_in: $tags
        tag_not_in: $excludedTags
        minimumTagRank: $minimumTagRank
        sort: $sort
        isAdult: $isAdult
      ) {
        id
        title {
          userPreferred
        }
        coverImage {
          extraLarge
          large
          color
        }
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        bannerImage
        season
        description
        type
        format
        status(version: 2)
        episodes
        duration
        chapters
        volumes
        genres
        isAdult
        averageScore
        popularity
        nextAiringEpisode {
          airingAt
          timeUntilAiring
          episode
        }
        mediaListEntry {
          id
          status
        }
        studios(isMain: true) {
          edges {
            isMain
            node {
              id
              name
            }
          }
        }
      }
    }
  }
  ${pageInfoFragment}
`;
