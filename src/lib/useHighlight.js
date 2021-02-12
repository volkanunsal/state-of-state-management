import { useEffect } from 'react';

export function useHighlight(html) {
  useEffect(() => {
    const el = document.createElement('div');
    document.querySelector('#root').appendChild(el);
    el.innerHTML = `<pre><code class='language-jsx'></code></pre>`;

    document.querySelectorAll('pre code').forEach((block) => {
      block.innerText = html;
      window.hljs.highlightBlock(block);
    });
    return () => {
      el.parentElement.removeChild(el);
    };
  }, []);
}
export default useHighlight;
