import { css } from "lit";

export const RTEStyles = css`
  .rte-renderer {
    max-width: 1200px;
    border-radius: 4px;
    margin: 0 auto;
    background-color: var(--color-surface);
    box-shadow: var(--shadow-1);
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 128px;
    overflow: clip;
  }

  .rte-renderer pre {
    background: var(--color-background);
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    border: 1px solid var(--color-border);
  }

  .rte-renderer code {
    font-family: "Roboto Mono", monospace;
    background: none;
    color: inherit;
    font-size: 0.8rem;
    padding: 0;
  }
  .ProseMirror {
    height: 100%;
    width: 100%;
    outline: none;
    white-space: pre-wrap;
  }
  .ProseMirror p {
    margin-top: 0;
    margin-bottom: 0.1rem;
  }

  pre {
    white-space: pre-wrap;
  }

  blockquote {
    border-left: 4px solid var(--color-primary);
    padding: 16px;
    font-style: italic;
  }
`;
