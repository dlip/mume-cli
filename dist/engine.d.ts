import { MarkdownEngine, MarkdownEngineConfig } from '@shd101wyy/mume';
export { MarkdownEngine, MarkdownEngineConfig };
export declare const config: MarkdownEngineConfig;
export declare function createEngine(filePath: string, projectDirectoryPath?: string): Promise<MarkdownEngine>;
export declare function exportHtml(filePath: string, options?: {
    projectDirectoryPath?: string;
    offline?: boolean;
    runAllCodeChunks?: boolean;
}): Promise<string>;
export declare function exportPdf(filePath: string, options?: {
    projectDirectoryPath?: string;
    runAllCodeChunks?: boolean;
    openFileAfterGeneration?: boolean;
}): Promise<string>;
export declare function exportGfm(filePath: string, options?: {
    projectDirectoryPath?: string;
    runAllCodeChunks?: boolean;
}): Promise<string>;
export declare function exportEbook(filePath: string, fileType: string): Promise<string>;
export declare function exportMarkdown(type: 'pdf' | 'gmf' | 'html' | 'ebook', args: any, options: any, logger: any): Promise<void>;
