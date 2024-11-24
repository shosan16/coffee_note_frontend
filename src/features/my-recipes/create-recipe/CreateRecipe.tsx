import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Bean, Droplet, Scale } from 'lucide-react';

import { StepsInput } from '@/features/my-recipes/create-recipe/steps-input/StepsInput';
import { AmountInput } from '@/features/my-recipes/create-recipe/amount-input/AmountInput';

type Step = {
    minutes: number;
    seconds: number;
    action: string;
};

export const CreateRecipe: React.FC = () => {
    const [title, setTitle] = useState('');
    const [ratio, setRatio] = useState('0:0');
    const [coffeeAmount, setCoffeeAmount] = useState(0);
    const [waterAmount, setWaterAmount] = useState(0);
    const [dripperName, setDripperName] = useState<string>('Light');
    const [grinderName, setGrinderName] = useState<string>('Light');
    const [roastLevel, setRoastLevel] = useState<string>('');
    const [grindLevel, setGrindLevel] = useState<string>('');
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
            dripperName,
            grinderName,
            roastLevel,
            grindLevel,
            description,
            steps,
        });
        // TODO: フォームの送信処理（例：サーバーにデータを送信）
    };

    return (
        <div className="mx-auto w-full max-w-screen-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* タイトル */}
                <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* コーヒー豆と水の量 */}
                <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                        <Scale className="h-4 w-4" />
                        Ratio
                    </Label>
                    <div className="text-2xl font-bold text-primary">
                        {ratio}
                    </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
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
                                150, 200, 250, 300, 350, 400, 450, 500, 600,
                            ]}
                            icon={<Droplet className="h-4 w-4 text-primary" />}
                        />
                    </div>
                </div>

                {/* ドリッパー・グラインダー */}
                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="dripper">Dripper</Label>
                        <Input
                            type="text"
                            id="dripper"
                            onChange={(e) => setDripperName(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="grinder">Grinder</Label>
                        <Input
                            type="text"
                            id="grinder"
                            onChange={(e) => setGrinderName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {/* 焙煎度 */}
                    <div className="space-y-2">
                        <Label htmlFor="roastLevel">焙煎度</Label>
                        <Select
                            value={roastLevel}
                            onValueChange={(value) => setRoastLevel(value)}
                        >
                            <SelectTrigger id="roastLevel">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">
                                    ライトロースト
                                </SelectItem>
                                <SelectItem value="2">
                                    ミディアムロースト
                                </SelectItem>
                                <SelectItem value="3">
                                    ダークロースト
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* 挽き目 */}
                    <div className="space-y-2">
                        <Label htmlFor="grindLevel">挽き目</Label>
                        <Select
                            value={grindLevel}
                            onValueChange={(value) => setGrindLevel(value)}
                        >
                            <SelectTrigger id="grindLevel">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">細挽き</SelectItem>
                                <SelectItem value="2">中挽き</SelectItem>
                                <SelectItem value="3">粗挽き</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* ステップ */}
                <StepsInput steps={steps} setSteps={setSteps} />

                {/* 説明 */}
                <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                    />
                </div>

                {/* アクションボタン */}
                <div className="flex justify-end space-x-4">
                    {/* 下書き保存ボタン */}
                    <Button
                        type="button"
                        variant="outline"
                        // onClick={handleSaveDraft}
                        className="w-auto px-6"
                    >
                        Save
                    </Button>
                    {/* 提出ボタン */}
                    <Button type="submit" className="w-auto px-6">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};
