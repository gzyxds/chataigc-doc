import{_ as t,c as e,a3 as o,o as r}from"./chunks/framework.OIXTx_-L.js";const h=JSON.parse('{"title":"GPT 使用指南","description":"","frontmatter":{},"headers":[],"relativePath":"work/fqa/gpt.md","filePath":"work/fqa/gpt.md","lastUpdated":null}'),p={name:"work/fqa/gpt.md"};function n(P,a,T,s,G,l){return r(),e("div",null,a[0]||(a[0]=[o('<h1 id="gpt-使用指南" tabindex="-1">GPT 使用指南 <a class="header-anchor" href="#gpt-使用指南" aria-label="Permalink to &quot;GPT 使用指南&quot;">​</a></h1><p>内容来自互联网，如有错误请指出。</p><p>注意</p><p>请注意：对于普通用户，我们建议使用 GPT-3.5 而不是 GPT-4。因为 GPT-3.5 的响应速度是 GPT-4 的四倍，同时 GPT-4 的价格比 GPT-3.5 高出157.5 倍-315 倍。</p><h2 id="为什么推荐-gpt-3-5-turbo" tabindex="-1">为什么推荐 gpt-3.5-turbo？ <a class="header-anchor" href="#为什么推荐-gpt-3-5-turbo" aria-label="Permalink to &quot;为什么推荐 gpt-3.5-turbo？&quot;">​</a></h2><p>根据我们的用户在处理数十亿 tokens 过程中的经验教训，我们得出了以下关于 GPT-4 和 GPT-3.5 的使用建议： 1.我们不推荐普通用户使用 GPT-4，因为 GPT-3.5 的响应速度比 GPT-4 快四倍，而且 GPT-4 的价格比 GPT-3.5 高出157.5 倍-315 倍。 2.如果您还是想尝试 GPT-4，请务必注意：在对话过程中避免添加过量无关上下文。这样做不会提高语境理解，反而会消耗更多 tokens。</p><h2 id="为什么-gpt-4-或-gpt-3-5-无法辨认自身的版本" tabindex="-1">为什么 GPT-4 或 GPT-3.5 无法辨认自身的版本？ <a class="header-anchor" href="#为什么-gpt-4-或-gpt-3-5-无法辨认自身的版本" aria-label="Permalink to &quot;为什么 GPT-4 或 GPT-3.5 无法辨认自身的版本？&quot;">​</a></h2><p>首先，如果你询问 GPT-4：你是 GPT-4 吗？它很有可能会回答：我是 OpenAI 的 GPT-3 模型，目前尚未推出 GPT-4。</p><p>这种现象背后的原因是，OpenAI 提供的 GPT-4 API 使用的训练数据截止到 2021 年 9 月。当模型训练完成后，若不再次进行训练，它所包含的知识并不会自动更新。就像你在 2021 年无法回答 2023 年你享用的第一顿饭是什么一样，你给出的答案必然是错误的。</p><h2 id="如何区分-gpt-3-5-和-gpt-4" tabindex="-1">如何区分 GPT-3.5 和 GPT-4？ <a class="header-anchor" href="#如何区分-gpt-3-5-和-gpt-4" aria-label="Permalink to &quot;如何区分 GPT-3.5 和 GPT-4？&quot;">​</a></h2><p>你可以尝试提问：“树上有 9 只鸟，猎人开枪打死一只，树上还剩下多少只鸟？”</p><p>在 90%的情况下，GPT-3.5 都会回答剩下 8 只鸟； 而 GPT-4 则大概率会回答剩下 0 只鸟，因为其他的都被吓跑了。 如果这个问题测试不出来，你可以新建上下文或者多试几次，请不要在一个上下文内连续询问。</p><h2 id="tokens-是什么" tabindex="-1">Tokens 是什么？ <a class="header-anchor" href="#tokens-是什么" aria-label="Permalink to &quot;Tokens 是什么？&quot;">​</a></h2><p>Token 是 GPT 处理文本的基本单位。简而言之，Token 可以是一个字、一个词或特定语言中的一个字符。它们负责将输入的文本数据转换为 GPT 可以处理的数据格式。</p><p>作用：Tokens 的数量影响模型的能力，例如理解复杂语义、表达丰富内容以及高效处理长篇文本等。 限制：然而，较多的 Tokens 数量意味着更大的计算资源需求，可能导致处理速度减慢和内存需求增加。 每个 GPT 模型都有一个预设的最大 Tokens 数量。例如，GPT-3 允许处理的最大 Tokens 数量约为 4096。需要注意的是，这个数量包括输入和输出的所有 Tokens。</p><h2 id="什么是上下文" tabindex="-1">什么是上下文？ <a class="header-anchor" href="#什么是上下文" aria-label="Permalink to &quot;什么是上下文？&quot;">​</a></h2><p>在 GPT 用于文本生成时，它需要考虑之前输入的所有文本上下文，以生成连贯、有意义的句子。随着输入上下文的增加，GPT 生成的文本变得越来越连贯和精准。例如，如果将一篇完整的文章或段落作为输入，GPT 将能生成符合上下文连贯性的自然语言文本。因此，GPT 上下文累积得越多，生成文本的准确度和连贯性呈逐步提升趋势。</p>',17)]))}const d=t(p,[["render",n]]);export{h as __pageData,d as default};
