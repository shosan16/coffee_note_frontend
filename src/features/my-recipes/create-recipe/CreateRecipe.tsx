import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StepsInput } from '@/features/my-recipes/create-recipe/steps-input/StepsInput';

interface Step {
    minutes: number;
    seconds: number;
    action: string;
}

export const CreateRecipe: React.FC = () => {
    const [title, setTitle] = useState('');
    const [coffeeAmount, setCoffeeAmount] = useState('0');
    const [waterAmount, setWaterAmount] = useState('0');
    const [roastLevel, setRoastLevel] = useState<string>('Light');
    const [grindLevel, setGrindLevel] = useState<string>('Light');
    const [description, setDescription] = useState('');
    const [steps, setSteps] = useState<Step[]>([
        { minutes: 0, seconds: 0, action: '' },
    ]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            title,
            coffeeAmount,
            waterAmount,
            roastLevel,
            description,
            steps,
        });
        // TODO: フォームの送信処理（例：サーバーにデータを送信）
    };

    return (
        <Card className="mx-auto w-full max-w-lg">
            <CardHeader>
                <CardTitle>Register Coffee Recipe</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* タイトル */}
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    {/* コーヒー豆と水の量 */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="coffeeAmount">
                                Coffee Amount (g)
                            </Label>
                            <Input
                                id="coffeeAmount"
                                type="number"
                                value={coffeeAmount}
                                onChange={(e) =>
                                    setCoffeeAmount(e.target.value)
                                }
                                required
                                min="0"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="waterAmount">
                                Water Amount (g)
                            </Label>
                            <Input
                                id="waterAmount"
                                type="number"
                                value={waterAmount}
                                onChange={(e) => setWaterAmount(e.target.value)}
                                required
                                min="0"
                            />
                        </div>
                    </div>

                    {/* 焙煎レベル */}
                    <div className="space-y-2">
                        <Label>Roast Level</Label>
                        <RadioGroup
                            value={roastLevel}
                            onValueChange={setRoastLevel}
                            className="flex space-x-4"
                        >
                            {['Light', 'Medium', 'Dark'].map((level) => (
                                <div
                                    key={level}
                                    className="flex items-center space-x-2"
                                >
                                    <RadioGroupItem
                                        value={level}
                                        id={`roast-${level.toLowerCase()}`}
                                    />
                                    <Label
                                        className="hover:cursor-pointer"
                                        htmlFor={`roast-${level.toLowerCase()}`}
                                    >
                                        {level}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>

                    {/* 挽き目レベル */}
                    <div className="space-y-2">
                        <Label>Grind Level</Label>
                        <RadioGroup
                            value={grindLevel}
                            onValueChange={setGrindLevel}
                            className="flex space-x-4"
                        >
                            {['Fine grind', 'Medium grind', 'Coarse grind'].map(
                                (level) => (
                                    <div
                                        key={level}
                                        className="flex items-center space-x-2"
                                    >
                                        <RadioGroupItem
                                            value={level}
                                            id={`grind-${level.toLowerCase()}`}
                                        />
                                        <Label
                                            className="hover:cursor-pointer"
                                            htmlFor={`grind-${level.toLowerCase()}`}
                                        >
                                            {level}
                                        </Label>
                                    </div>
                                ),
                            )}
                        </RadioGroup>
                    </div>

                    {/* 説明 */}
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                            placeholder="Describe your recipe..."
                        />
                    </div>

                    {/* ステップ */}
                    <StepsInput steps={steps} setSteps={setSteps} />

                    {/* 提出ボタン */}
                    <Button type="submit" className="w-full">
                        Register Recipe
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
