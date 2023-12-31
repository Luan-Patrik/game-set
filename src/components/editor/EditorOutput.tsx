'use client'

import { useGetUserPostSettings } from '@/hooks/use-get-user-post-settings'
import Editor from './Editor'

const EditorOutput = () => {
  const { data, isLoading } = useGetUserPostSettings()

  if (isLoading) return 'Loading...'

  return (
    <div className='py-4'>
      <Editor
        content={data?.content || ''}
        isPrivate={data?.private || false}
      />
    </div>
  )
}

export default EditorOutput
