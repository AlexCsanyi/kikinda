import markdownStyles from "../styles/markdown-styles.module.css";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto blog-post">
      <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}