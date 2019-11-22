import { MDXProvider } from "@mdx-js/react"

const SectionContent = props => (
  <MDXProvider
    components={{
      h1: props => <h1 {...props} className="font-bold text-3xl mb-5" />,
      p: props => <p {...props} className="mb-3" />,
      img: props => <img {...props} className="mb-5" />,
      ul: props => <ul {...props} className="mb-5" />,
      li: props => <li {...props} className="list-disc list-inside mr-5" />,
      a: props => <a {...props} className="hover:underline font-semibold" />
    }}>
    <div className="p-5">
      {props.children}
    </div>
  </MDXProvider>
)

export default SectionContent