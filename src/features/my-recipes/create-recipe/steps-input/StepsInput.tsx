import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Trash2 } from 'lucide-react';
import { TimeField } from '@/features/my-recipes/create-recipe/steps-input/TimeField';
import { Label } from '@/components/ui/label';

type Step = {
    minutes: number;
    seconds: number;
    action: string;
};

type StepsInputProps = {
    steps: Step[];
    setSteps: Dispatch<SetStateAction<Step[]>>;
};

export const StepsInput = ({ steps, setSteps }: StepsInputProps) => {
    const addStep = () => {
        setSteps([...steps, { minutes: 0, seconds: 0, action: '' }]);
    };

    const removeStep = (index: number) => {
        if (steps.length > 1) {
            setSteps(steps.filter((_, i) => i !== index));
        }
    };

    const updateStep = (
        index: number,
        field: keyof Step,
        value: number | string,
    ) => {
        const newSteps = [...steps];
        if (field === 'minutes' || field === 'seconds') {
            newSteps[index][field] = Number(value);
        } else {
            newSteps[index][field] = value as string;
        }
        setSteps(newSteps);
    };

    return (
        <div className="w-full space-y-2">
            <Label>Steps</Label>
            <div className="space-y-3">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <TimeField
                            minutes={step.minutes}
                            seconds={step.seconds}
                            onChange={(minutes, seconds) => {
                                updateStep(index, 'minutes', minutes);
                                updateStep(index, 'seconds', seconds);
                            }}
                            className="w-[120px]"
                        />
                        <Textarea
                            placeholder="Action"
                            value={step.action}
                            onChange={(e) =>
                                updateStep(index, 'action', e.target.value)
                            }
                            className="min-h-[2.5rem] flex-grow resize-none"
                            rows={1}
                        />
                        {steps.length > 1 && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeStep(index)}
                                className="h-10 w-10"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                ))}
            </div>
            <Button variant="outline" className="w-full" onClick={addStep}>
                <span className="mr-2">+</span>
                Add Step
            </Button>
        </div>
    );
};
