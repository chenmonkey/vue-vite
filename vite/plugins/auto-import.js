import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
    return autoImport({
        // 自动导入vue和vue-router,pinia相关函数
        imports: [
            'vue',
            'vue-router',
            'pinia'
        ]
    })
}