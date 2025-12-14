// src/library/microcms.ts
import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

// MicroCMSのクライアントを作成
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 記事の型定義（MicroCMSで作った項目に合わせます）
export type News = {
  id: string;
  createdAt: string;
  title: string;
  content: string;
};

// 記事一覧を取得する関数
export const getNews = async (queries?: MicroCMSQueries) => {
  return await client.getList<News>({
    endpoint: "news", // MicroCMSで決めた「API名」
    queries,
  });
};
