import * as React from 'react';

interface PageProps {
  //
}

export default async function Page({ ...props }: PageProps): Promise<React.JSX.Element> {
  return (
    <div>
      <h1>Page Title</h1>
    </div>
  );
}
