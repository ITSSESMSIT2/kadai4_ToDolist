# Kadai4_ToDolist（提出課題④ 進捗管理ボード / Nuxt版）

タスクを登録して、期限とステータスで進捗を管理するアプリ。
提出課題①（素のJavaScript）と同じ題材を、Nuxtで作り直す。

## 技術スタック

| 種別           | 使用技術                                                        |
| -------------- | --------------------------------------------------------------- |
| フレームワーク | Nuxt 4（`ssr: false` / 実PJT準拠）                              |
| UI             | Vue 3（Composition API / `<script setup>`）                     |
| 言語           | TypeScript                                                      |
| 状態管理       | Pinia（`@pinia/nuxt`）                                          |
| Node           | 24.22.1（`.node-version` / `.nvmrc` で固定）                    |
| 公開           | GitHub Pages（main へのマージで GitHub Actions が自動デプロイ） |

## セットアップ

```bash
nvm use        # .nvmrc の 24.22.1 に切り替える
yarn install
```

## 開発コマンド

| コマンド        | 内容                                              |
| --------------- | ------------------------------------------------- |
| `yarn dev`      | 開発サーバーを起動する                            |
| `yarn generate` | 静的ビルド（GitHub Pages に公開されるものと同じ） |
| `yarn preview`  | ビルド結果をローカルで確認する                    |

## リポジトリ構成

```
.github/workflows/deploy.yml  main へのpushでビルドしGitHub Pagesへ公開
app/
  assets/styles/tokens.css    デザイントークン（色・余白・角丸・影）
  pages/                      ページ。ファイル名がそのままURLになる
nuxt.config.ts                ssr:false / Pinia / baseURL などの設定
public/                       静的ファイル（ビルドされずそのまま配信される）
```

## スタイルの決まり

- 色・余白・角丸・影は `app/assets/styles/tokens.css` のCSS変数を `var(--…)` で参照する。値を直書きしない
- コンポーネントのスタイルは `<style scoped>` に閉じる

## 公開フロー

main にマージされると `.github/workflows/deploy.yml` が動き、`yarn generate` の出力（`.output/public`）が GitHub Pages に公開される。
サブパス配信のため `nuxt.config.ts` の `app.baseURL` をリポジトリ名から自動で決めている。

## 機能概要

<!-- TODO: 何ができるアプリか、画面と操作を書く -->

## 課題①との差分表

<!-- TODO: 素のJSでは自分で書いていたのに、Nuxtでは書かなくてよくなった処理を書く -->

## 工夫した点

<!-- TODO: 設計上の判断や、なぜその書き方にしたかを書く -->

## 詰まった点・調べたこと

<!-- TODO: つまずいた箇所と、どう調べて解決したかを書く -->

### 【STEP1】

- Pinia使い方<br>
  Udemyの動画を視聴しなおす。<br>
  - store<br>
    composableのようなもの。1ストアに1機能を実装する。<br>
  - DefineStore()<br>
    Piniaが必ず持つ関数。第一引数にそのストア名、第二引数に処理をする関数を書く。必ずreturnを返す。returnはオブジェクトである必要があり、第二引数で宣言したすべてのconstを持たなければならない。<br>
  - 命名規則<br>
    use【任意】Store<br>
  - 使用するには<br>
    component内で呼び出し、use【任意】Store()で使える。<br>
    `.オブジェクト名`で利用でき、`.value`不要。**どこからでも変更可能な値。**<br>
  - state<br>
    ストア内で定義されたrefオブジェクト。必ずreturnに乗せる<br>
  - getter<br>
    ストア内で定義されたComputedRefオブジェクト。<br>
  - Action<br>
    ストア内で定義された関数。<br>

- Piniaとcomposableをどう使い分けるか<br>
  どこまでがPiniaに乗せて実装すべきかでご相談。結論として、どこからでも呼び出したいデータをPiniaに持たせ、その操作や表示はcomponentに分離。<br>
  - 見た目、操作の二種類に分けることは今までと変わらない。
  - タスク管理のUI＝ユーザーの操作なので同じ箇所でよい。

- Task、Statusの型作成方法<br>
  作成の際は前回課題のインターフェイスを参照。実装方法としてidとセレクトボタンの利用も考えたためご相談<br>
  - idとセレクトボタンで管理する→並べ替えの機能を実装する必要がある時には楽（日本語のソートは設定が面倒）
  - stringでは幅が広すぎる→三パターンだけで制限を強くすることでほかの値が入るようなエラーを防ぐ。

- 日付の形成<br>
  フォームでカレンダーをクリックする形式になると考え、課題①を参照。<br>
  前回からの変更点としては、arrow関数を利用することで変数を一つ減らし、Piniaとしての戻り値も減らしている。
