import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf'

type PdfRendererProps = {
	url: string;
};

const PdfRenderer = ({ url }: PdfRendererProps) => {
	return (
		<div className='w-full bg-white rounded-md shadow flex flex-col items-center'>
			<div className='h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2'>
				<div className='flex items-center gap-1.5'>
					<Button
						// disabled={currPage <= 1}
						// onClick={() => {
						// 	setCurrPage((prev) =>
						// 		prev - 1 > 1 ? prev - 1 : 1
						// 	);
						// 	setValue('page', String(currPage - 1));
						// }}
						variant='ghost'
						aria-label='previous page'
					>
						<ChevronDown className='h-4 w-4' />
					</Button>

					<div className='flex items-center gap-1.5'>
						{/* <Input
							{...register('page')}
							className={cn(
								'w-12 h-8',
								errors.page && 'focus-visible:ring-red-500'
							)}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									handleSubmit(handlePageSubmit)();
								}
							}}
						/> */}
						<p className='text-zinc-700 text-sm space-x-1'>
							<span>/</span>
							{/* <span>{numPages ?? 'x'}</span> */}
						</p>
					</div>
					{/* 
					<Button
						disabled={
							numPages === undefined || currPage === numPages
						}
						onClick={() => {
							setCurrPage((prev) =>
								prev + 1 > numPages! ? numPages! : prev + 1
							);
							setValue('page', String(currPage + 1));
						}}
						variant='ghost'
						aria-label='next page'
					>
						<ChevronUp className='h-4 w-4' />
					</Button> */}
				</div>
				{/* 
				<div className='space-x-2'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								className='gap-1.5'
								aria-label='zoom'
								variant='ghost'
							>
								<Search className='h-4 w-4' />
								{scale * 100}%
								<ChevronDown className='h-3 w-3 opacity-50' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem onSelect={() => setScale(1)}>
								100%
							</DropdownMenuItem>
							<DropdownMenuItem onSelect={() => setScale(1.5)}>
								150%
							</DropdownMenuItem>
							<DropdownMenuItem onSelect={() => setScale(2)}>
								200%
							</DropdownMenuItem>
							<DropdownMenuItem onSelect={() => setScale(2.5)}>
								250%
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<Button
						onClick={() => setRotation((prev) => prev + 90)}
						variant='ghost'
						aria-label='rotate 90 degrees'
					>
						<RotateCw className='h-4 w-4' />
					</Button>

					<PdfFullscreen fileUrl={url} />
				</div> */}
			</div>

			{/* <div className='flex-1 w-full max-h-screen'>
				<SimpleBar
					autoHide={false}
					className='max-h-[calc(100vh-10rem)]'
				>
					<div ref={ref}>
						<Document
							loading={
								<div className='flex justify-center'>
									<Loader2 className='my-24 h-6 w-6 animate-spin' />
								</div>
							}
							onLoadError={() => {
								toast({
									title: 'Error loading PDF',
									description: 'Please try again later',
									variant: 'destructive',
								});
							}}
							onLoadSuccess={({ numPages }) =>
								setNumPages(numPages)
							}
							file={url}
							className='max-h-full'
						>
							{isLoading && renderedScale ? (
								<Page
									width={width ? width : 1}
									pageNumber={currPage}
									scale={scale}
									rotate={rotation}
									key={'@' + renderedScale}
								/>
							) : null}

							<Page
								className={cn(isLoading ? 'hidden' : '')}
								width={width ? width : 1}
								pageNumber={currPage}
								scale={scale}
								rotate={rotation}
								key={'@' + scale}
								loading={
									<div className='flex justify-center'>
										<Loader2 className='my-24 h-6 w-6 animate-spin' />
									</div>
								}
								onRenderSuccess={() => setRenderedScale(scale)}
							/>
						</Document>
					</div>
				</SimpleBar>
			</div> */}
		</div>
	);
};

export default PdfRenderer;