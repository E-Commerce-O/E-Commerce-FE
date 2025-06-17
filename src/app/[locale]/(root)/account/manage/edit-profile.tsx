'use client'
import {IUser} from "@/lib/response/user";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {UpdateUserRequest} from "@/lib/request/user";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import * as React from "react";
import {useTranslations} from "next-intl";
import {genderOptions} from "@/lib/utils";

export function DialogEditProfile({
                                      user,
                                      handleEditProfile
                                  }: {
    user: IUser,
    handleEditProfile: (request: UpdateUserRequest) => void,
}) {
    const t = useTranslations()
    const [fullName,setFullName] = useState(user.fullName??'')
    const [email, setEmail] = useState(user.email??'')
    const [phone,setPhone] = useState(user.phoneNumber??'')
    const [dob,setDob] = useState(user.dateOfBirth??'')
    const [gender,setGender] = useState<number>(user.gender??0)
    // eslint-disable-next-line
    const [avtPath,setAvtPath] = useState(user.avtPath|| '')
    const handleSubmit = async () => {
        const request = {
            email: email,
            phoneNumber: phone,
            fullName: fullName,
            avtPath: avtPath,
            dateOfBirth: dob,
            gender:gender
        } as UpdateUserRequest
        handleEditProfile(request)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{t('Edit Profile')}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[470px]">
                <DialogHeader>
                    <DialogTitle>{t('Edit Profile')}</DialogTitle>
                    <DialogDescription>
                        {/* eslint-disable-next-line*/}
                        {t('Make changes to')}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="fullName" className="text-right">
                            {t('Avatar')}
                        </Label>
                        <Avatar className="h-9 w-9">
                            <AvatarImage src={avtPath} alt="Avatar" />
                            <AvatarFallback>Your avatar</AvatarFallback>
                        </Avatar>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="fullName" className="text-right">
                            {t('Full name')}
                        </Label>
                        <Input id="fullName" onChange={(e) => {
                            setFullName(e.target.value)
                        }} value={fullName} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input id="email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                            {t('Phone number')}
                        </Label>
                        <Input id="phone" value={phone} onChange={(e) => {
                            setPhone(e.target.value)
                        }} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="dob" className="text-right">
                            {t('DOB')}
                        </Label>
                        <Input id="dob" value={dob} onChange={(e) => {
                            setDob(e.target.value)
                        }} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="gender" className="text-right">
                            {t('Gender')}
                        </Label>
                        <Select
                            value={gender.toString()}
                            onValueChange={(value) => setGender(parseInt(value))}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Chọn giới tính" />
                            </SelectTrigger>
                            <SelectContent>
                                {genderOptions(t).map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="destructive">
                            {t('Close')}
                        </Button>
                    </DialogClose>
                    <Button type="submit" onClick={handleSubmit}>{t('Save changes')}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}