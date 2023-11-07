import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    name: 'production',
    title: 'kennich-production',
    projectId: 'rupuwev6',
    dataset: 'production',
    basePath: '/production',
    plugins: [deskTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'beta',
    title: 'kennich-beta',
    projectId: 'rupuwev6',
    dataset: 'beta',
    basePath: '/beta',
    plugins: [deskTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
])
