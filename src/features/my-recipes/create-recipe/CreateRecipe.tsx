import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bean, Droplet, Scale } from 'lucide-react';

import { StepsInput } from '@/features/my-recipes/create-recipe/steps-input/StepsInput';
import { AmountInput } from '@/features/my-recipes/create-recipe/amount-input/AmountInput';
import { Separator } from '@/components/ui/separator';

interface Step {
    minutes: number;
    seconds: number;
    action: string;
}

export const CreateRecipe: React.FC = () => {
    const [title, setTitle] = useState('');
    const [ratio, setRatio] = useState('1:15.0');
    const [coffeeAmount, setCoffeeAmount] = useState(1);
    const [waterAmount, setWaterAmount] = useState(0);
    const [roastLevel, setRoastLevel] = useState<string>('Light');
    const [grindLevel, setGrindLevel] = useState<string>('Light');
    const [description, setDescription] = useState('');
    const [steps, setSteps] = useState<Step[]>([
        { minutes: 0, seconds: 0, action: '' },
    ]);

    useEffect(() => {
        if (coffeeAmount > 0) {
            const calculatedRatio = (waterAmount / coffeeAmount).toFixed(1);
            setRatio(`1:${calculatedRatio}`);
        }
    }, [coffeeAmount, waterAmount]);

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
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                            <Label className="flex items-center gap-2">
                                <Scale className="h-4 w-4" />
                                Ratio
                            </Label>
                            <div className="text-2xl font-bold text-primary">
                                {ratio}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <AmountInput
                                label="Bean"
                                value={coffeeAmount}
                                onChange={setCoffeeAmount}
                                max={50}
                                step={0.1}
                                quickAdjustValues={[15, 20, 25, 30, 35, 40]}
                                icon={<Bean className="h-4 w-4 text-primary" />}
                                allowDecimal={true}
                            />
                        </div>
                        <div className="space-y-6">
                            <AmountInput
                                label="Water"
                                value={waterAmount}
                                onChange={setWaterAmount}
                                max={1000}
                                step={5}
                                quickAdjustValues={[
                                    150, 200, 250, 300, 350, 400,
                                ]}
                                icon={
                                    <Droplet className="h-4 w-4 text-primary" />
                                }
                            />
                        </div>
                    </div>

                    <Separator />

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
