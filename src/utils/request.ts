/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IRequestBody } from "@/types";
import Axios from "axios";
import { DocumentNode } from "graphql";
import { get } from "lodash";

// 电影：https://tmdb.apps.quintero.io/
// 动漫：https://anilist.co/graphiql

const requestInstance = Axios.create({
  baseURL: "https://graphql.anilist.co",
});

export const fetchData = (gqlDoc: DocumentNode, variables: any) => {
  const data: IRequestBody = {
    operationName: getOperationName(gqlDoc),
    query: getGqlString(gqlDoc),
    variables,
  };
  return requestInstance({
    method: "POST",
    url: "/",
    data,
  });
};

function getOperationName(gql: DocumentNode): string {
  return get(gql, "definitions[0].name.value");
}

function getGqlString(gql: DocumentNode): string {
  return get(gql, "loc.source.body");
}
