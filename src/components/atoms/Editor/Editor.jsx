import 'quill/dist/quill.snow.css'; // ES6

import { ImageIcon } from 'lucide-react';
import Quill from 'quill';
import { useEffect, useRef, useState } from 'react';
import { PiTextAa } from 'react-icons/pi';

import { Button } from '@/components/ui/button';

import { Hint } from '../Hint/Hint';

export const Editor = () => {

    const [isToolbarVisible, setIsToolbarVisible] = useState(false);

    const containerRef = useRef();
    const defaultValueRef = useRef();
    const quillRef = useRef();


    function toggleToolBar() {
        setIsToolbarVisible(!isToolbarVisible);
        const toolbar = containerRef.current.querySelector('.ql-toolbar');
        if(toolbar) {
            toolbar.classList.toggle('hidden');
        }
    }

    useEffect(() => {

        if(!containerRef.current) return; //if containerRef is not initialised, return

        const container = containerRef.current; //get the container element

        const editorContainer = container.appendChild(container.ownerDocument.createElement('div')); //create a new div element and append it to the container

        const options = {
            theme: 'snow',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['link',],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['clean']
                ],
                keyboard: {
                    bindings: {
                        enter: {
                            key: 'Enter',
                            handler: () => {
                                return;
                            }
                        },
                        shift_enter: {
                            key: 'Enter',
                            shiftKey: true,
                            handler: () => {
                                quill.insertText(quill.getSelection()?.index || 0, '\n'); // insert a new line
                            }
                        }
                    }
                }
            }
        };

        const quill = new Quill(editorContainer, options);

        quillRef.current = quill;
        quillRef.current.focus();

        quill.setContents(defaultValueRef.current);

    }, []);

    return (
        <div
          className="flex flex-col"
        >
            <div
            className='flex flex-col border border-slate-300 rounded-md overflow-hidden focus-within:shadow-sm focus-within:border-slate-400 bg-white'
            >
                <div className='h-full ql-custom' ref={containerRef}/>

                <div className='flex px-2 pb-2 z-[5]'>
                  <Hint label={!isToolbarVisible ? 'Show toolbar' : 'Hide toolbar'} side='bottom' align='center'>
                  <Button
                    size='iconSm'
                    variant='ghost'
                    disabled={false}
                    onClick={toggleToolBar}
                  >
                    <PiTextAa className='size-4' />
                  </Button>
                  </Hint>

                  <Hint label="Image">
                    <Button
                       size='iconSm'
                       variant='ghost'
                       disabled={false}
                       onClick={() => {}}
                    >
                        <ImageIcon className='size-4' />
                    </Button>
                  </Hint>
                </div>
            </div>

            <p
              className='p-2 text-[10px] text-mutes-foreground flex justify-end'
            >
                <strong>Shift + return</strong> &nbsp; to add a new line
            </p>
        </div>    
    );
};