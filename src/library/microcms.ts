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
  message: string;       // ★追加: 入団メッセージ
};


// --- 団紹介用 (オブジェクト形式) ---
export type About = {
  createdAt: string;
  introduction: string;  // ★追加: 団紹介テキスト
  profile: string;       // 概要 (表)
  activity: string;      // 活動内容
};

export const getAbout = async (queries?: MicroCMSQueries) => {
  return await client.getObject<About>({
    endpoint: "about",
    queries,
  });
};

// --- 3. 演奏会情報 (リスト形式) ★追加 ---
export type Concert = {
  id: string;
  title: string;
  date: string;     // 開催日
  ticketUrl?: string; // ★追加: チケットURL (ない場合もあるので ?)
  image?: {         // 画像 (ない場合もあるので ?)
    url: string;
  };
  content: string;  // 詳細
};

// 日付順（新しい順）に取得する設定を入れておきます
export const getConcerts = async (queries?: MicroCMSQueries) => {
  return await client.getList<Concert>({
    endpoint: "concert",
    queries: { orders: '-date', ...queries }, // -date で新しい順
  });
};

// --- 4. 活動報告 (リスト形式) ★追加 ---
export type Activity = {
  id: string;
  createdAt: string;
  publishedAt: string; // 公開日
  title: string;
  thumbnail?: {        // サムネイル画像
    url: string;
  };
  content: string;     // 本文
};

export const getActivities = async (queries?: MicroCMSQueries) => {
  return await client.getList<Activity>({
    endpoint: "activity",
    queries,
  });
};